import csv from "csvtojson";
import writeToFile from "../pipeline/tools/write.js";
import processListTranscript from "./cddList.js";
import processProsTranscript from "./cddJSON.js";
import formatAndWriteToCsv from "./cddCSV.js";

async function proposalSummarization(transcriptCSV, resultsRepo, proposals) {
  const jsonArray = await csv().fromFile(transcriptCSV);
  // writeToFile(jsonArray, "/Users/hunter/dev/cdd/cddjs/data/CDD/climate/Q5.js");
  await processListTranscript(jsonArray, `${resultsRepo}/list/`);

  const argumentsListed = await import(`${resultsRepo}/list/backup.js`);

  proposals.forEach(async (proposal) => {
    await processProsTranscript(
      argumentsListed.default,
      `${resultsRepo}/args/`,
      proposal.text
    );
    
    const jsonCompletion = await import(`${resultsRepo}/args/backup.js`);
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
  "/Users/hunter/dev/cdd/cddjs/results/CDD/climate/listArgsThenPros256take13";
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
