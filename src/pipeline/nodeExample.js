import dotenv from "dotenv";
dotenv.config();
import { Configuration, OpenAIApi } from "openai";
import withTokenCount from "./withTokenCount.js";
import writeToFile from "./write.js";
import { createWriteStream } from "fs";
import { stringify } from "csv-stringify";
// https://codebeautify.org/javascript-escape-unescape

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// writeToFile(response.data.choices, "./openresponse.js");
const cddReportInstructions =
  "what is the person talking about? keep that in mind while answering the following:\n\n1. are they for, against or undecided on it?\n2. is their sentiment positive, negative or neutral?\n3. can you summarize their points?\n4. do they support their points with facts or anecdotes?\n5. if they support their point with facts, what are the facts?\n6. if they support their point with anecdotes, what are the anecdotes?\n7. can you quote the anecdote?\n8.  what are the claims they make?\n9. what are the premises they rely on?\n10. what topic are they talking about?\n\nanswer these questions with the following transcript:\n";
export default async function getCompletion(instructions, transcript) {
  // const transcript = withTokenCount[40].text;
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
async function transcriptionWithColumns(transcription) {
  const res = [];
  for (let i = 0; i < transcription.length; i++) {
    const obj = await composeObj(transcription[i]);
    res.push(obj);
  }
  // return transcription.map(composeObj);
  return res;
}
// grab  first 3 records from withTokenCount

async function processTranscript() {
  const withCompletions = await transcriptionWithColumns(withTokenCount);
  console.log("!!!withCompletions", withCompletions);
  // // print each record of withCompletions
  // // withCompletions.forEach((transcription) => {
  // //   console.log("!!!transcription", transcription.rawCompletion);
  // // });
  const byAuthor = groupedByAuthor(withCompletions);
  // sort each authors array by order using the authorTranscriptsSortedByOrder function
  const sortedFullData = authorTranscriptsSortedByOrder(byAuthor);
  // for  each author iterate over speeches aand write to csv named after author
  sortedFullData.forEach((authorTranscripts) => {
    const author = authorTranscripts[0].author;
    const formattedForCsv = authorTranscripts.map((transcription) => {
      const topic = transcription["topic"];
      const summaryOfPoints = transcription["summary of points"];
      const whatFacts = transcription["what facts, if any?"];
      const whatAnecdotes = transcription["what anecdotes, if any?"];
      const anecdoteQuote = transcription["anecdote quote"];
      const originalTranscript = transcription.text;
      return [
        topic,
        summaryOfPoints,
        whatFacts,
        whatAnecdotes,
        anecdoteQuote,
        originalTranscript,
      ];
    });
    const columns = [
      "topic", // 10
      "summary of points", // 3
      "what facts, if any?", //5
      "what anecdotes, if any?", //6
      "anecdote quote", //7
      "original transcript", //transcript.text
    ];

    const filename = `${author}.csv`;
    const writableStream = createWriteStream(filename);
    const stringifier = stringify({ header: true, columns: columns });

    formattedForCsv.forEach((summaries) => {
      stringifier.write(summaries);
    });
    stringifier.pipe(writableStream);
  });
}
await processTranscript();
// console.log("!!!byAuthor", byAuthor);
