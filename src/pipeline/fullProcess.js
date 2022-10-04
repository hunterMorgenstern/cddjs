import csv from "csvtojson";
import processListTranscript from "./cddList.js";
import processProsTranscript from "./cddPros.js";
import formatAndWriteToCsv from "./cddCSV.js";
import factsAndAnecdotes from "./cddOrig.js";
import fs from 'fs'

const dudLines = [
  'is okay',
  'is bad',
  'is the best thing ever',
  'is the worst thing ever'
]

async function cleanupArguments(argsListed, proposal) {
  const newJson = JSON.parse(JSON.stringify(argsListed))
  // force the completion to have at least 5 lines
  for (var i = 0; i < argsListed.length; i++) {
    const line = newJson[i]['response']['completion']
    const lines = line.split('\n')
    const newLines = []
    for (var j = 0; j < lines.length; j++) {
      if (lines[j].length > 0) {
        newLines.push(lines[j])
      }
    }
    if (newLines.length == 1 && newLines[0].length >= 1 && newLines[0][0] != '1') {
      newLines[0] = `1. ${newLines[0]}`
    }
    let start = 0
    while (newLines.length < 5) {
      newLines.push(`${newLines.length + 1}. ${proposal} ${dudLines[start]}`)
      start += 1;
    }
    newJson[i]['response']['completion'] = newLines.join('\n');
  }
  return newJson
}

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
    const argumentsListedCleaned = await cleanupArguments(argumentsListed, proposal.text)
    await processProsTranscript(
      argumentsListedCleaned,
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
