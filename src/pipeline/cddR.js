import dotenv from "dotenv";
dotenv.config();
import { Configuration, OpenAIApi } from "openai";
// import testSample from "./withTokenCount.js";
import writeToFile from "/Users/hunter/dev/fr/CDD/src/pipeline/tools/write.js";
import { createWriteStream } from "fs";
import { stringify } from "csv-stringify";
// import testSample from "/Users/hunter/dev/fr/CDD/data/Docs4FileRead/sacklerdepoFormatted.js";
// import testSample from "/Users/hunter/dev/fr/CDD/data/Docs4FileRead/testSample.js";
import testSample from "/Users/hunter/dev/fr/CDD/data/CDD/climate/test.js";
// https://codebeautify.org/javascript-escape-unescape

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// writeToFile(response.data.choices, "./openresponse.js");
const cddReportInstructions =
  "what is the person talking about? keep that in mind while answering the following:\n\n1. are they for, against or undecided on it?\n2. is their sentiment positive, negative or neutral?\n3. can you summarize their points?\n4. do they support their points with facts or anecdotes?\n5. if they support their point with facts, what are the facts?\n6. if they support their point with anecdotes, what are the anecdotes?\n7. can you quote the anecdote?\n8.  what are the claims they make?\n9. what are the premises they rely on?\n10. what topic are they talking about?\n\nanswer these questions with the following transcript:\n";
export default async function getCompletion(instructions, transcript) {
  // const transcript = testSample[40].text;
  const prompt = `${instructions}\"${transcript}\"`;
  // const prompt = "how many states are in  the united states?";
  // console.log("!!!prompt", prompt);
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
  // console.log("!!!response", response);
  return response.data.choices[0].text;
}

function groupedByAuthor(transcriptions) {
  return transcriptions.reduce((acc, curr) => {
    const author = curr.author;
    if (!acc[author]) {
      acc[author] = [];
    }
    acc[author].push(curr);
    return acc;
  }, {});
}
function authorTranscriptsSortedByOrder(byAuthor) {
  return Object.keys(byAuthor).map((author) => {
    const transcriptions = byAuthor[author];
    const sorted = transcriptions.sort((a, b) => a.order - b.order);
    return sorted;
  });
}

const formatCompletion = (responseText) => {
  const lines = responseText.split("\n");
  const cleanedLines = lines.filter((line) => line.length > 0);
  const columns = {
    topic: null, // 10
    "summary of points": null, // 3
    "what facts, if any?": null, //5
    "what anecdotes, if any?": null, //6
    "anecdote quote": null, //7
    "for/against/undecided": null, //1
    "sentiment positive/negative/neutral": null, //2
    "facts or anecdotes": null, //4
    claims: null, //8
    premises: null, //9
  };

  cleanedLines.forEach((line) => {
    let string = line.replace(/^\d+\. /, "");
    if (line.startsWith("3. ")) {
      // TODO remove redunandant string bits
      columns["summary of points"] = string;
    }
    if (line.startsWith("5. ")) {
      columns["what facts, if any?"] = string;
    }
    if (line.startsWith("6. ")) {
      columns["what anecdotes, if any?"] = string;
    }
    if (line.startsWith("7. ")) {
      columns["anecdote quote"] = string;
    }
    if (line.startsWith("10. ")) {
      columns["topic"] = string;
    }
    if (line.startsWith("1. ")) {
      columns["for/against/undecided"] = string;
    }
    if (line.startsWith("2. ")) {
      columns["sentiment positive/negative/neutral"] = string;
    }
    if (line.startsWith("4. ")) {
      columns["facts or anecdotes"] = string;
    }
    if (line.startsWith("8. ")) {
      columns["claims"] = string;
    }
    if (line.startsWith("9. ")) {
      columns["premises"] = string;
    }
  });
  return columns;
};

async function composeObj(transcription) {
  const completionText = await getCompletion(
    cddReportInstructions,
    transcription.text
  );
  const columns = formatCompletion(completionText);
  const res = {
    ...transcription,
    rawCompletion: completionText,
    ...columns,
  };
  console.log("!!!res", res);
  return res;
}

async function transcriptionWithColumns(transcription, backupFile) {
  const res = [];
  // var stream = fs.createWriteStream("append.txt", { flags: "a" });
  const writer = createWriteStream(backupFile);
  for (let i = 0; i < transcription.length; i++) {
    const obj = await composeObj(transcription[i]);
    // pipe each obj to a file
    writer.write(JSON.stringify(obj) + ",");
    // stream.write(index + "\n");

    res.push(obj);
  }
  // stream.end();
  writer.end();
  // return transcription.map(composeObj);
  return res;
}
// grab  first 3 records from testSample

async function processTranscript(transcriptJSONFile, fullBackupFile, csvResultsRepo) {
  const withCompletions = await transcriptionWithColumns(transcriptJSONFile, fullBackupFile);
  // write  a json backup full file, should be same as whats written to in sampledep
  // redunadant lose
  // writeToFile(withCompletions, fullBackupFile);
console.log('!!!withCompletions',withCompletions);
  const byAuthor = groupedByAuthor(withCompletions);
  console.log('!!!byAuthor',byAuthor);
  const sortedFullData = authorTranscriptsSortedByOrder(byAuthor);
  console.log('!!!sortedFullData',sortedFullData);
  formatAndWriteToCsv(sortedFullData, csvResultsRepo);
}


function formatAndWriteToCsv(sortedFullData, csvResultsRepo) {
  // console.log('!!!sortedFullData',sortedFullData);
  sortedFullData.forEach((authorTranscripts) => {
    const author = authorTranscripts[0].author;
    const formattedForCsv = formattedJsonToCsv(authorTranscripts);

    const columns = [
      "topic", // 10
      "summary of points", // 3
      "what facts, if any?", //5
      "what anecdotes, if any?", //6
      "anecdote quote", //7
      // "for/against/undecided", //1
      // "sentiment positive/negative/neutral", //2
      // "facts or anecdotes", //4
      // "claims", //8
      // "premises", //9
      "original transcript", //transcript.text
    ];

    const filename = `${csvResultsRepo}/${author}.csv`;
    console.log('!!!formattedForCsv',formattedForCsv);
    pipeToCsv(formattedForCsv, filename, columns);
  });
}

// given columns and arrayOfRows in  the same order and pipe to csv
function pipeToCsv(arrayOfRows, destinationFileName, columns) {
  const writableStream = createWriteStream(destinationFileName);
  const stringifier = stringify({ header: true, columns: columns });

  arrayOfRows.forEach((summaries) => {
    stringifier.write(summaries);
  });
  stringifier.pipe(writableStream);
}

// turn json to array  which order matches the columns order
function formattedJsonToCsv(authorTranscripts) {
  console.log('!!!authorTranscripts',authorTranscripts);
  return authorTranscripts.map((transcription) => {
    const topic = transcription["topic"];
    const summaryOfPoints = transcription["summary of points"];
    const whatFacts = transcription["what facts, if any?"];
    const whatAnecdotes = transcription["what anecdotes, if any?"];
    const anecdoteQuote = transcription["anecdote quote"];
    // const forAgainstUndecided = transcription["for/against/undecided"];
    // const sentimentPositiveNegativeNeutral = transcription["sentiment positive/negative/neutral"];
    // const factsOrAnecdotes = transcription["facts or anecdotes"];
    // const claims = transcription["claims"];
    // const premises = transcription["premises"];
    const originalTranscript = transcription.text;
    return [
      topic,
      summaryOfPoints,
      whatFacts,
      whatAnecdotes,
      anecdoteQuote,
      // forAgainstUndecided,
      // sentimentPositiveNegativeNeutral,
      // factsOrAnecdotes,
      // claims,
      // premises,
      originalTranscript,
    ];
  });
}
await processTranscript(
 testSample,
  "/Users/hunter/dev/fr/CDD/results/CDD/climate/backupTest.js",
  "/Users/hunter/dev/fr/CDD/results/CDD/climate"
);

// step one convert to json to feed to api piecewise
// 