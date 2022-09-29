// take in csv filer, convert to json, ping openai to generate text, write to json file, convert to csv, write to csv file
import csv from "csvtojson";
import writeToFile from "../pipeline/tools/write.js";
import processListTranscript from "./cddList.js";
import processProsTranscript from "./cddJSON.js";
import * as fs from "fs";
// const csvFilePath='../../data/CDD/climate/Untitled spreadsheet - Sheet3.csv'
const csvFilePath =
  "/Users/hunter/dev/cdd/cddjs/data/CDD/climate/Untitled spreadsheet - Sheet4.csv";
const jsonArray = await csv().fromFile(csvFilePath);
// writeToFile(jsonArray, "/Users/hunter/dev/cdd/cddjs/data/CDD/climate/Q5.js");
// import testSample from "../../results/CDD/climate/listArgs2/backup.js";
// console.log('!!!jsonArray',jsonArray);
async function proposalSummarization() {
    // console.log('!!!testSample',testSample);
//     function readData(err, data) {
//         console.log(JSON.parse(data));
//   }
  

//   fs.readFile('../../results/CDD/climate/listArgs2/backup.js', 'utf8', readData);
await processListTranscript(
    jsonArray,
    "/Users/hunter/dev/cdd/cddjs/results/CDD/climate/listArgsThenPros256take12/list/"
    );
    const moduleA = await import('/Users/hunter/dev/cdd/cddjs/results/CDD/climate/listArgsThenPros256take12/list/backup.js');
    console.log('111',moduleA.default);
  await processProsTranscript(
    moduleA.default,
      "/Users/hunter/dev/cdd/cddjs/results/CDD/climate/listArgsThenPros256take12/args/"
    );
}

proposalSummarization();
