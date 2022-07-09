import { createWriteStream } from "fs";
import { stringify } from "csv-stringify";
// const db = require("./db");
const filename = "saved_from_db.csv";
const writableStream = createWriteStream(filename);
// Speaker:	Nancy
// Topic:	Summary of Points	what facts, if any?	what anecdotes, if any?	Anecdote Quote:	Original Transcript:
const columns = [
  "topic", // 10
  "summary of points", // 3
  "what facts, if any?", //5
  "what anecdotes, if any?", //6
  "anecdote quote", //7
  "original transcript", //transcript.text
];

const stringifier = stringify({ header: true, columns: columns });
// db.each(`select * from migration`, (error, row) => {
//   if (error) {
//     return console.log(error.message);
//   }
stringifier.write(["speaker", transcript.author]);
res.forEach((line) => {
  stringifier.write(res);
});
// });
stringifier.pipe(writableStream);
console.log("Finished writing data");
