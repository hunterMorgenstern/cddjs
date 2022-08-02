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

const proposalPrefix = "Given the following proposal:"
const transcriptPrefix = "\n###\nQuestion 2. List if each argument is a A) pro B) con C) neutral D) not applicable\n"

const proposalQ5N =
" \"In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption.\""
const questions = "\n###\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\n"

export default async function getCompletion(proposal, transcript, questions) {
  const promptE = `${proposalPrefix}${proposal}${questions}${transcript}`;
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: promptE,
    temperature: 0.08,
    max_tokens: 256,
    top_p: 0.06,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    //   stop: ["\n"],
  });
  console.log('!!!response',response.config.data);
  console.log('!!!response.data.choices[0].text',response.data.choices[0].text);
  return { config: response.config.data, completion: response.data.choices[0].text};
}

async function composeObj(transcription) {
  const response = await getCompletion(
    proposalQ5N,
    transcription.rawCompletion,
    questions
  );
  const res = {
    transcription,
    response
  };
  return res;
}

async function transcriptionWithColumns(transcription, backupFile) {
  const writer = createWriteStream(backupFile);
  writer.write("export default [");
  for (let i = 0; i < transcription.length; i++) {
    const obj = await composeObj(transcription[i]);
    // pipe each obj to a file
    console.log('!!!obj',obj);
    writer.write(JSON.stringify(obj) + ",");
  }
  writer.write("]");
  writer.end();
  return;
}

async function processTranscript(
  transcriptJSONFile,
  fullBackupFile,
) {
   await transcriptionWithColumns(
    transcriptJSONFile,
    fullBackupFile
  );
}

await processTranscript(
  testSample,
  "/Users/hunter/dev/fr/CDD/results/CDD/climate/listArgsThenPros256take7/backup.js"
);

// step one convert to json to feed to api piecewise
//
