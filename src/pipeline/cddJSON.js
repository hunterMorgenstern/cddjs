import dotenv from "dotenv";
dotenv.config();
import * as fs from "fs";
import { Configuration, OpenAIApi } from "openai";
import { createWriteStream } from "fs";
import testSample from "../../results/CDD/climate/listArgs2/backup.js";
// https://codebeautify.org/javascript-escape-unescape

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getCompletion(prompt) {
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    temperature: 0.08,
    max_tokens: 256,
    top_p: 0.06,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    //   stop: ["\n"],
  });
  return {
    config: response.config.data,
    completion: response.data.choices[0].text,
  };
}

const proposalPrefix = "Given the following proposal:";
const proposalQ5N =
  ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."';
const questions =
  "\n###\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\n";
async function composeObj(transcription) {
  const promptE = `${proposalPrefix}${proposalQ5N}${questions}${transcription.response.completion}`;
  const response = await getCompletion(promptE);
  const res = {
    transcription,
    response,
  };
  return res;
}

async function transcriptionWithColumns(transcription, backupFile) {
  if (!fs.existsSync(backupFile)) {
    await fs.promises.mkdir(backupFile, { recursive: true });
  }
  const writer = createWriteStream(`${backupFile}/backup.js`);
  writer.write("export default [");
  for (let i = 0; i < transcription.length; i++) {
    const obj = await composeObj(transcription[i]);
    console.log("!!!obj", obj);
    writer.write(JSON.stringify(obj) + ",");
  }
  writer.write("]");
  writer.end();
  return;
}

// async function processTranscript(transcriptJSONFile, fullBackupFile) {
//   await transcriptionWithColumns(transcriptJSONFile, fullBackupFile);
// }

// await processTranscript(
//   testSample,
//   "../../results/CDD/climate/listArgsThenPros256take10"
// );

export default transcriptionWithColumns;
// step one convert to json to feed to api piecewise
//
