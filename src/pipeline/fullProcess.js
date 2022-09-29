import csv from "csvtojson";
import processListTranscript from "./cddList.js";
import processProsTranscript from "./cddPros.js";
import formatAndWriteToCsv from "./cddCSV.js";
import factsAndAnecdotes from "./cddOrig.js";
import fs from 'fs'

async function proposalSummarization(transcriptCSV, resultsRepo, proposals) {
  const jsonArray = await csv().fromFile(transcriptCSV);

  // original transcript summary
  // await factsAndAnecdotes(jsonArray, `${resultsRepo}/facts/`);

  // list of arguments
  await processListTranscript(jsonArray, `${resultsRepo}/list/`);

  const rawBackup = fs.readFileSync(`${resultsRepo}/list/backup.json`);
  const argumentsListed = JSON.parse(rawBackup);

  // pros and cons
  proposals.forEach(async (proposal) => {
    await processProsTranscript(
      argumentsListed,
      `${resultsRepo}/pros/`,
      proposal.text,
      proposal.number
    );
    
    // format and write to csv
    const rawCompletion = fs.readFileSync(`${resultsRepo}/pros/${proposal.number}/backup.json`);
    const jsonCompletion = JSON.parse(rawCompletion);
    await formatAndWriteToCsv(
      proposal.number,
      jsonCompletion,
      `${resultsRepo}/proposals/`
    );
  });
}

let rawdata = fs.readFileSync(process.env.PROPOSAL_JSON_FILE_PATH);
const proposals = JSON.parse(rawdata);
proposalSummarization(process.env.CSV_FILE_PATH, process.env.RESULTS_DESTINATION, proposals);
