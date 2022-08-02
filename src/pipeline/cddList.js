import dotenv from "dotenv";
dotenv.config();
import { Configuration, OpenAIApi } from "openai";
// import testSample from "./withTokenCount.js";
import writeToFile from "/Users/hunter/dev/fr/CDD/src/pipeline/tools/write.js";
import { createWriteStream } from "fs";
import { stringify } from "csv-stringify";
// import testSample from "/Users/hunter/dev/fr/CDD/data/Docs4FileRead/sacklerdepoFormatted.js";
// import testSample from "/Users/hunter/dev/fr/CDD/data/Docs4FileRead/testSample.js";
import testSample from "/Users/hunter/dev/fr/CDD/data/CDD/climate/Q5.js";
// import testSample from "/Users/hunter/dev/fr/CDD/results/CDD/climate/listArgs/backupTest.js";
// import testSample from "/Users/hunter/dev/fr/CDD/data/CDD/climate/test.js";
// https://codebeautify.org/javascript-escape-unescape

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const proposalPrefix = "Given the following proposal:";
const transcriptPrefix = 'speaker: "';

const proposalQ5N =
  ' "In order to reduce methane emissions produced by livestock, the US should launch an educational campaign to encourage people to reduce their meat and dairy consumption."';
const questions = "\"\n###\nQuestion 1. List this speaker's arguments:\n";

const rawPrompt =
  "speaker: \" i definitely do not support that second proposal about an educational campaign to cut out meat because that is going to be interpreted by the american public. and oh, we can't ever eat meat at all. so that's not going to go over too. well for farmers like me. who do raise livestock. we are very cognizant of the fact that we are a methane. emitter. we are regulated by the state of new york. if you have over three hundred head of cattle, you have to have a full nutrient plan for your farm and methane is somehow included in that plan or a little bit under that number. so i'm not super familiar, but we're very on top of these issues in farming. so don't need the government to help.\"\n###\nQuestion 1. List this speaker's arguments:\n\n1. The speaker does not support the second proposal for an educational campaign to cut out meat because they believe it will be interpreted by the American public as a suggestion that they can never eat meat again.\n2. The speaker argues that farmers are already cognizant of the fact that they are methane emitters and are regulated by the state.\n3. The speaker suggests that the government does not need to help farmers with methane emissions because they are already doing so themselves.\n\n#\nlove\n#";

export default async function getCompletion(proposal, transcript, questions) {
  const promptE = `${transcriptPrefix}${transcript}${questions}`;
  // console.log('!!!rawPrompt',rawPrompt);
  // console.log('!!!promptE',promptE);
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
  console.log("!!!response", response.config.data);
  console.log(
    "!!!response.data.choices[0].text",
    response.data.choices[0].text
  );
  return {
    config: response.config.data,
    completion: response.data.choices[0].text,
  };
}

async function composeObj(transcription) {
  const response = await getCompletion(
    proposalQ5N,
    transcription.text,
    questions
  );
  const res = {
    transcription,
    response,
  };
  return res;
}

async function transcriptionWithColumns(transcription, backupFile) {
  const writer = createWriteStream(backupFile);
  writer.write("export default [");
  for (let i = 0; i < transcription.length; i++) {
    const obj = await composeObj(transcription[i]);
    // pipe each obj to a file
    console.log("!!!obj", obj);
    writer.write(JSON.stringify(obj) + ",");
  }
  writer.write("]");
  writer.end();
  return;
}

async function processTranscript(transcriptJSONFile, fullBackupFile) {
  await transcriptionWithColumns(transcriptJSONFile, fullBackupFile);
}

await processTranscript(
  testSample,
  "/Users/hunter/dev/fr/CDD/results/CDD/climate/listArgs2/backup.js"
);

// step one convert to json to feed to api piecewise
//
