import dotenv from "dotenv";
dotenv.config();
import { Configuration, OpenAIApi } from "openai";
// import testSample from "./withTokenCount.js";
import writeToFile from "/Users/hunter/dev/fr/CDD/src/pipeline/tools/write.js";
import { createWriteStream } from "fs";
import { stringify } from "csv-stringify";
// import testSample from "/Users/hunter/dev/fr/CDD/data/Docs4FileRead/sacklerdepoFormatted.js";
// import testSample from "/Users/hunter/dev/fr/CDD/data/Docs4FileRead/testSample.js";
// import testSample from "/Users/hunter/dev/fr/CDD/data/CDD/climate/Q5.js";
import testSample from "/Users/hunter/dev/fr/CDD/results/CDD/climate/listArgs/backup.js";
// import testSample from "/Users/hunter/dev/fr/CDD/data/CDD/climate/test.js";
// https://codebeautify.org/javascript-escape-unescape

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// https://onlinestringtools.com/escape-string
// const test =
//   "###\nproposal: The U.S. government should limit allowable greenhouse gas emissions including methane from large farms, just as it sets limits for industrial sources.\n###\nargument:  they heard someone singing about bearing the product where i'm at. now. there's a park here. they used to be a chemical place. they buried products in the ground and also living in buffalo. almost. so close to love canal. and what someone to mention about that bearing, the problem that i'm not really experienced, but i know that there's no guarantee that it's going to work. so i just that does happen to pop in my head. what simon said about bearing the product and i wish i knew that more about the nuclear, like someone says, i'm going to do researching on that. thank you.\n###\n1. does the argument imply the speaker is? A) pro-proposal B) con-proposal C) argument is not about proposal\n2. explain your reasoning step by step \n###\n";
const quiz = "###\nDirections: Read the Proposal and  Speaker\'s statement carefully. Then answer the questions.\n###\nProposal: In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\n###\nSpeaker: \" i definitely do not support that second proposal about an educational campaign to cut out meat because that is going to be interpreted by the american public. and oh, we can\'t ever eat meat at all. so that\'s not going to go over too. well for farmers like me. who do raise livestock. we are very cognizant of the fact that we are a methane. emitter. we are regulated by the state of new york. if you have over three hundred head of cattle, you have to have a full nutrient plan for your farm and methane is somehow included in that plan or a little bit under that number. so i\'m not super familiar, but we\'re very on top of these issues in farming. so don\'t need the government to help.\"\n###\nQuestion 2. is the speaker? A. pro proposal. B. con proposal.  C. other\nQuestion 3. explain your reasoning step by step.\n###"
// const proposalPrefix = "###\nproposal: ";
// const proposalPrefix = "###\nDirections: Read the Proposal and  Speaker\'s statement carefully. Then answer the questions.\n###\nProposal: ";
// const proposalPrefix = "###\nGiven the following proposal: "
const proposalPrefix = "\n###\nGiven the following proposal: "
// const transcriptPrefix = "\n###\nargument: ";
// const transcriptPrefix = "\n###\nSpeaker: ";
// const transcriptPrefix = "speaker: ";
const transcriptPrefix = "\n###\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\n"
const proposalQ5O =
  "The U.S. government should limit allowable greenhouse gas emissions including methane from large farms, just as it sets limits for industrial sources.";
const proposalQ5NM =
  "The US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.";
const proposalQ5N =
" \"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\""
  // "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.";
const sumPrompt = "speaker: \" i definitely do not support that second proposal about an educational campaign to cut out meat because that is going to be interpreted by the american public. and oh, we can't ever eat meat at all. so that's not going to go over too. well for farmers like me. who do raise livestock. we are very cognizant of the fact that we are a methane. emitter. we are regulated by the state of new york. if you have over three hundred head of cattle, you have to have a full nutrient plan for your farm and methane is somehow included in that plan or a little bit under that number. so i'm not super familiar, but we're very on top of these issues in farming. so don't need the government to help.\"\n###\nList this speaker's arguments:\n\n1. The speaker does not support the second proposal for an educational campaign to cut out meat because they believe it will be interpreted by the public as a ban on meat consumption.\n2. The speaker is a farmer and they are already regulated by the state of New York in terms of their methane emissions.\n3. The speaker does not believe that the government needs to help farmers with methane emissions.\n###\nGiven the quote and the list of arguments list if determine if each argument is supported with fact, anecdote or other:\n\n1. Anecdote\n2. Fact\n3. Anecdote\n#\nlist with classification\n#"
const  list  =  "###\nGiven the following proposal: \"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\"\n###\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\n\n1. The speaker does not support the second proposal for an educational campaign to cut out meat because they believe it will be interpreted by the public as a ban on meat consumption.\n2. The speaker is a farmer and they are already regulated by the state of New York in terms of their methane emissions.\n3. The speaker does not believe that the government needs to help farmers with methane emissions."
// const proposalQ5N =
//   "The US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.";
// const transcript =
//   "they heard someone singing about bearing the product where i'm at. now. there's a park here. they used to be a chemical place. they buried products in the ground and also living in buffalo. almost. so close to love canal. and what someone to mention about that bearing, the problem that i'm not really experienced, but i know that there's no guarantee that it's going to work. so i just that does happen to pop in my head. what simon said about bearing the product and i wish i knew that more about the nuclear, like someone says, i'm going to do researching on that. thank you.";
// const questions =
//   "\n###\n1. does the argument imply the speaker is? A) pro-proposal B) con-proposal C) argument is not about proposal\n2. explain your reasoning step by step \n###\n1.";
// quiz questions
// const questions =
//   "\n###\n1. is the argument about the topic? A) yes B) no C) n/a\n2. if yes, is the argument? A) pro B) con C) n/a\n3. explain your reasoning step by step \n###\n1.";
// const questions =
//   "\n###\n1. is the argument about the proposal? A) yes B) no C) unsure\n1. does the argument imply the speaker is? A) pro-proposal B) con-proposal C) argument is not about proposal\n3. explain your reasoning step by step \n###\n1.";
// just picks C
// const questions =
//   "\n###\nQuestion 1. Is the Speaker? A) not enough information. B) con proposal. C) pro proposal. \nQuestion 2. Explain your reasoning step by step.\n###\n1."
// const questions =
//   "\n###\nQuestion 1. is the speaker? A. pro proposal. B. con proposal.  C. neutral\n###\n1."
const questions = "\n###\nQuestion 2. List if each argument is a A) for B) against C) not applicable to the given proposal."

// const prompt = proposal + transcript + questions;
export default async function getCompletion(proposal, transcript, questions) {
  // const transcript = testSample[40].text;
  // const prompt = `${proposalPrefix}${proposal}${transcriptPrefix}${transcript}${questions}`;
  // const prompt = `${transcriptPrefix}${transcript}${questions}`;
  // const prompt = "###\nGiven the following proposal: \"The US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\"\n###\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\n\n1. Red meat is bad for our health and we should eat less of it.\n2. Telling people to cut out red meat is not going to do much to regulate it at the farm level.\n3. Cutting out red meat could potentially have a negative impact on the economy."
  // const prompt = "how many states are in  the united states?";
  // console.log("!!!prompt", prompt);
  const promptC = `${transcript}${proposalPrefix}${proposal}${questions}`;
  const prompt =  "1. The speaker does not support the second proposal for an educational campaign to cut out meat because they believe it will be interpreted by the public as a ban on meat consumption.\n2. The speaker is a farmer and they are already regulated by the state of New York in terms of their methane emissions.\n3. The speaker does not believe that the government needs to help farmers with methane emissions.\n###\nGiven the following proposal: \"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\"\n###\nQuestion 2. List if each argument is a A) for B) against C) not applicable to the given proposal."
  console.log('!!!promptC',promptC);
  // console.log('!!!prompt',prompt);
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: promptC,
    temperature: 0.08,
    max_tokens: 556,
    top_p: 0.06,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    //   stop: ["\n"],
  });
  // console.log('!!!response',response.config.data);
  console.log('!!!response.data.choices[0].text',response.data.choices[0].text);
  // let cunt =  "###\nGiven the following proposal: \"The US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\"\n###\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\n\n1. Red meat is bad for our health and we should eat less of it.\n2. Telling people to cut out red meat is not going to do much to regulate it at the farm level.\n3. Cutting out red meat could potentially have a negative impact on the economy."
  // let  fuck = "prompt":"###\\nGiven the following proposal:  \\"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\\"\\n###\\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\\n\\n1. The speaker does not support the second proposal for an educational campaign to cut out meat.\\n2. The speaker believes that the American public will interpret the campaign as a ban on meat consumption.\\n3. The speaker argues that farmers are already regulated on methane emissions.\\n4. The speaker believes that the government does not need to help farmers on these issues."
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
    // topic: null, // 10
    // "summary of points": null, // 3
    // "what facts, if any?": null, //5
    // "what anecdotes, if any?": null, //6
    // "anecdote quote": null, //7
    // "for/against/undecided": null, //1
    // "sentiment positive/negative/neutral": null, //2
    // "facts or anecdotes": null, //4
    // claims: null, //8
    // premises: null, //9
  };
  // console.log('!!!cleanedLines',cleanedLines);
  // cleanedLines.forEach((line) => {
  //   let string = line.replace(/^\d+\. /, "");
  //   // console.log('!!!string',string, line);
  //   // if (line.startsWith("3. ")) {
  //   //   // TODO remove redunandant string bits
  //   //   columns["summary of points"] = string;
  //   // }
  //   // if (line.startsWith("5. ")) {
  //   //   columns["what facts, if any?"] = string;
  //   // }
  //   // if (line.startsWith("6. ")) {
  //   //   columns["what anecdotes, if any?"] = string;
  //   // }
  //   // if (line.startsWith("7. ")) {
  //   //   columns["anecdote quote"] = string;
  //   // }
  //   // if (line.startsWith("10. ")) {
  //   //   columns["topic"] = string;
  //   // }
  //   if (line.startsWith("1. ")) {
  //     columns["for/against/undecided"] = string;
  //   }
  //   if (line.startsWith("2. ")) {
  //     columns["sentiment positive/negative/neutral"] = string;
  //   }
  //   // if (line.startsWith("4. ")) {
  //   //   columns["facts or anecdotes"] = string;
  //   // }
  //   // if (line.startsWith("8. ")) {
  //   //   columns["claims"] = string;
  //   // }
  //   // if (line.startsWith("9. ")) {
  //   //   columns["premises"] = string;
  //   // }
  // });

  columns["pro/con/undecided"] = cleanedLines[0];
  columns["reason"] = cleanedLines[1];
  // console.log('!!!columns',columns);
  return columns;
};

async function composeObj(transcription) {
  const completionText = await getCompletion(
    proposalQ5N,
    transcription.rawCompletion,
    questions
  );
  console.log('!!!completionText',completionText);
  // const columns = formatCompletion(completionText);
  const res = {
    proposal: `${proposalQ5N}`,
    rawCompletion: completionText,
    // ...columns,
    ...transcription,
    // rawPrompt: `${proposalQ5N}${transcription.text}${questions}`,
    rawPrompt: `${proposalPrefix}${proposalQ5N}${transcriptPrefix}${transcription.rawCompletion}`,
pros: completionText,
    settings: { temperature: 0.08, max_tokens: 256, top_p: 0.06 },
  };
  // console.log("1.", completionText);
  // console.log("!!!res", res);
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

// TODO decouple from sorting and grouping
async function processTranscript(
  transcriptJSONFile,
  fullBackupFile,
  csvResultsRepo
) {
  const withCompletions = await transcriptionWithColumns(
    transcriptJSONFile,
    fullBackupFile
  );
  // write  a json backup full file, should be same as whats written to in sampledep
  // redunadant lose
  // writeToFile(withCompletions, fullBackupFile);
  // console.log('!!!withCompletions',withCompletions);
  const byAuthor = groupedByAuthor(withCompletions);
  // console.log('!!!byAuthor',byAuthor);
  const sortedFullData = authorTranscriptsSortedByOrder(byAuthor);
  // console.log('!!!sortedFullData',sortedFullData);
  formatAndWriteToCsv(sortedFullData, csvResultsRepo);
}

function formatAndWriteToCsv(sortedFullData, csvResultsRepo) {
  // console.log('!!!sortedFullData',sortedFullData);
  sortedFullData.forEach((authorTranscripts) => {
    const author = authorTranscripts[0].author;
    // const author = 'chrontranscript';
    const formattedForCsv = formattedJsonToCsv(authorTranscripts);

    const columns = [
      // "topic", // 10
      // "summary of points", // 3
      // "what facts, if any?", //5
      // "what anecdotes, if any?", //6
      // "anecdote quote", //7
      "pro/con/undecided", //1
      "reason", //2
      // "facts or anecdotes", //4
      // "claims", //8
      // "premises", //9
      "original transcript", //transcript.text
    ];

    const filename = `${csvResultsRepo}/${author}.csv`;
    // console.log('!!!formattedForCsv',formattedForCsv);
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
  // console.log('!!!authorTranscripts',authorTranscripts);
  return authorTranscripts.map((transcription) => {
    // const topic = transcription["topic"];
    // const summaryOfPoints = transcription["summary of points"];
    // const whatFacts = transcription["what facts, if any?"];
    // const whatAnecdotes = transcription["what anecdotes, if any?"];
    // const anecdoteQuote = transcription["anecdote quote"];
    const forAgainstUndecided = transcription["pro/con/undecided"];
    const sentimentPositiveNegativeNeutral = transcription["reason"];
    // const factsOrAnecdotes = transcription["facts or anecdotes"];
    // const claims = transcription["claims"];
    // const premises = transcription["premises"];
    const originalTranscript = transcription.text;
    return [
      // topic,
      // summaryOfPoints,
      // whatFacts,
      // whatAnecdotes,
      // anecdoteQuote,
      forAgainstUndecided,
      sentimentPositiveNegativeNeutral,
      // factsOrAnecdotes,
      // claims,
      // premises,
      originalTranscript,
    ];
  });
}
await processTranscript(
  testSample,
  "/Users/hunter/dev/fr/CDD/results/CDD/climate/listArgsThenPros256take3/backup.js",
  "/Users/hunter/dev/fr/CDD/results/CDD/climate/listArgsThenPros256take3"
);

// step one convert to json to feed to api piecewise
//
