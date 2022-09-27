// take in csv filer, convert to json, ping openai to generate text, write to json file, convert to csv, write to csv file
import csv from 'csvtojson';
import writeToFile from "../pipeline/tools/write.js";
import processListTranscript from './cddList.js';
import processProsTranscript from './cddJSON.js';
// const csvFilePath='../../data/CDD/climate/Untitled spreadsheet - Sheet3.csv'
const csvFilePath='/Users/hunter/dev/cdd/cddjs/data/CDD/climate/Untitled spreadsheet - Sheet3.csv'
const jsonArray=await csv().fromFile(csvFilePath);
writeToFile(jsonArray, "/Users/hunter/dev/cdd/cddjs/data/CDD/climate/Q5.js");
import testSample from "../../results/CDD/climate/listArgs2/backup.js";
// console.log('!!!jsonArray',jsonArray);
async function proposalSummarization(){
    await processListTranscript(
        jsonArray,
        "../../results/CDD/climate/listArgs2"
      );
    await processProsTranscript(
        testSample,
        "../../results/CDD/climate/listArgsThenPros256take10"
      );

}

proposalSummarization();