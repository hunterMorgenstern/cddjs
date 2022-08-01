import csv from 'csvtojson';
import writeToFile from "/Users/hunter/dev/fr/CDD/src/pipeline/tools/write.js";

// csv()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{
    //     console.log(jsonObj);
    //     /**
    //      * [
        //      * 	{a:"1", b:"2", c:"3"},
        //      * 	{a:"4", b:"5". c:"6"}
        //      * ]
        //      */ 
        // })
        
        // Async / await usage
const csvFilePath='/Users/hunter/dev/fr/CDD/data/CDD/climate/Untitled spreadsheet - Sheet2 (1).csv'
const jsonArray=await csv().fromFile(csvFilePath);
writeToFile(jsonArray, "/Users/hunter/dev/fr/CDD/data/CDD/climate/sample.js");