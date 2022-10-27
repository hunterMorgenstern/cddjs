import csv from "csvtojson";
import processListTranscript from "./cddList.js";
import processProsTranscript from "./cddPros.js";
import formatAndWriteToCsv from "./cddCSV.js";
import processFactsAndAnecdotes from "./cddOrig.js";
import fs from 'fs'

const dudLines = [
  'is okay',
  'is bad',
  'is the best thing ever',
  'is the worst thing ever'
]

// TODO 
// Simplify the openai task to grab anecdotes & facts
// List the facts/anecdotes

// TODO (if I have time)
// Compare the arguments to the proposal to see if they are for/against


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
  // console.log("transcriptData: " + jsonArray);
  // console.log(`${resultsRepo}`);
  // console.log(`${resultsRepo}/facts/`);
  



  // list of arguments -> this creates the arglist.json
  const argumentsListed = await processListTranscript(jsonArray, `${resultsRepo}/list/`);

  // const rawBackup = fs.readFileSync(`${resultsRepo}/list/backup.json`);
  // // const argumentsListed = JSON.parse(rawBackup);

  // pros and cons
  proposals.forEach(async (proposal) => {
    console.log("Proposal: "+proposal.text)
    const argumentsListedCleaned = await cleanupArguments(argumentsListed, proposal.text);
    const factsAndAnecdotes = await processFactsAndAnecdotes(jsonArray, `${resultsRepo}/facts/`, proposal.text);
    // console.log("Args cleaned: \n " + argumentsListedCleaned);
    // const factsAndAnecdotesCleaned = await cleanupArguments(factsAndAnecdotes, proposal.text)
    
    // const jsonCompletion = await processProsTranscript(
    //   argumentsListedCleaned,
    //   `${resultsRepo}/pros/`,
    //   proposal.text,
    //   proposal.number
    // );
    
    // format and write to csv
    // await formatAndWriteToCsv(
    //   proposal.number,
    //   jsonCompletion,
    //   `${resultsRepo}/proposals/`
    // );
  });
}

let rawdata = fs.readFileSync(process.env.PROPOSAL_JSON_FILE_PATH);
const proposals = JSON.parse(rawdata);
proposalSummarization(process.env.CSV_FILE_PATH, process.env.RESULTS_DESTINATION, proposals);
