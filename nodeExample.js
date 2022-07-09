import dotenv from "dotenv";
dotenv.config();
import { Configuration, OpenAIApi } from "openai";
import withTokenCount from "./withTokenCount.js";
import writeToFile from "./write.js";
// https://codebeautify.org/javascript-escape-unescape

// console.log('!!!process.env',process.env);
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const instructions =
  "what is the person talking about? keep that in mind while answering the following:\n\n1. are they for, against or undecided on it?\n2. is their sentiment positive, negative or neutral?\n3. can you summarize their points?\n4. do they support their points with facts or anecdotes?\n5. if they support their point with facts, what are the facts?\n6. if they support their point with anecdotes, what are the anecdotes?\n7. can you quote the anecdote?\n8.  what are the claims they make?\n9. what are the premises they rely on?\n10. what topic are they talking about?\n\nanswer these questions with the following transcript:\n";
const transcript = withTokenCount[40].text;
const prompt = `${instructions}\"${transcript}\"`;
// const prompt = "how many states are in  the united states?";
console.log("!!!prompt", prompt);
const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: prompt,
  temperature: 0.02,
  max_tokens: 2000,
  top_p: 0.02,
  //   frequency_penalty: 0.0,
  //   presence_penalty: 0.0,
  //   stop: ["\n"],
});

console.log("!!!response", response);
writeToFile(response.data.choices, "./openresponse.js");
// writeToFile(withTokenCount.map((st)=>
//     `${st.author}:${st.text}\n`
// ), './string.js')

// const fs = require("fs");
// const { stringify } = require("csv-stringify");
// // const db = require("./db");
// const filename = "saved_from_db.csv";
// const writableStream = fs.createWriteStream(filename);

// const columns = [
//   "year_month",
//   "month_of_release",
//   "passenger_type",
//   "direction",
//   "sex",
//   "age",
//   "estimate",
// ];

// const stringifier = stringify({ header: true, columns: columns });
// db.each(`select * from migration`, (error, row) => {
//   if (error) {
//     return console.log(error.message);
//   }
//   stringifier.write(row);
// });
// stringifier.pipe(writableStream);
// console.log("Finished writing data");
