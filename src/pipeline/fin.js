// take in csv filer, convert to json, ping openai to generate text, write to json file, convert to csv, write to csv file
import csv from "csvtojson";
import writeToFile from "../pipeline/tools/write.js";
import processListTranscript from "./cddList.js";
import processProsTranscript from "./cddJSON.js";
import formatAndWriteToCsv from "./cddCSV.js";
import * as fs from "fs";
// const csvFilePath='../../data/CDD/climate/Untitled spreadsheet - Sheet3.csv'
// import testSample from "../../results/CDD/climate/listArgs2/backup.js";
// console.log('!!!jsonArray',jsonArray);
async function proposalSummarization(transcriptCSV, resultsRepo) {
  const jsonArray = await csv().fromFile(transcriptCSV);
  // writeToFile(jsonArray, "/Users/hunter/dev/cdd/cddjs/data/CDD/climate/Q5.js");
  await processListTranscript(jsonArray, `${resultsRepo}/list/`);
  const argumentsListed = await import(`${resultsRepo}/list/backup.js`);
  console.log("111", argumentsListed.default);
  await processProsTranscript(argumentsListed.default, `${resultsRepo}/args/`);
  const jsonCompletion = await import(`${resultsRepo}/args/backup.js`);
  const proposal = "q5n";
  await formatAndWriteToCsv(
    proposal,
    jsonCompletion.default,
    `${resultsRepo}/proposals/`
  );
}

const csvFilePath =
  "/Users/hunter/dev/cdd/cddjs/data/CDD/climate/Untitled spreadsheet - Sheet4.csv";
const resultsDestination =
  "/Users/hunter/dev/cdd/cddjs/results/CDD/climate/listArgsThenPros256take13";
proposalSummarization(csvFilePath, resultsDestination);
