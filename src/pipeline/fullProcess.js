import csv from "csvtojson";
import processListTranscript from "./cddList.js";
import processProsTranscript from "./cddPros.js";
import formatAndWriteToCsv from "./cddCSV.js";
import factsAndAnecdotes from "./cddOrig.js";

async function proposalSummarization(transcriptCSV, resultsRepo, proposals) {
  const jsonArray = await csv().fromFile(transcriptCSV);

  // original transcript summary
  await factsAndAnecdotes(jsonArray, `${resultsRepo}/facts/`);

  // list of arguments
  await processListTranscript(jsonArray, `${resultsRepo}/list/`);

  const argumentsListed = await import(`${resultsRepo}/list/backup.js`);

  // pros and cons
  proposals.forEach(async (proposal) => {
    await processProsTranscript(
      argumentsListed.default,
      `${resultsRepo}/pros/`,
      proposal.text,
      proposal.number
    );
    
    // format and write to csv
    const jsonCompletion = await import(`${resultsRepo}/pros/${proposal.number}/backup.js`);
    await formatAndWriteToCsv(
      proposal.number,
      jsonCompletion.default,
      `${resultsRepo}/proposals/`
    );
  });
}

const csvFilePath =
  "/Users/hunter/dev/cdd/cddjs/data/CDD/climate/Untitled spreadsheet - Sheet4.csv";
const resultsDestination =
  "/Users/hunter/dev/cdd/cddjs/results/CDD/climate/results1";
const proposals = [
  {
    number: "q5n",
    text: ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
  },
  {
    number: "q9",
    text: ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."',
  },
];
proposalSummarization(csvFilePath, resultsDestination, proposals);
// TODO parse/make sure pros/cons are formatted correctly
// TODO merge all proposal results into one csv

// can either generate csvs and then combine them or combine them as json and then generate csvs
