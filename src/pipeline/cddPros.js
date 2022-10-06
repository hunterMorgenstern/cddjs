import * as fs from "fs";
import { createWriteStream } from "fs";
import getCompletion from "./tools/openai.js";
// https://codebeautify.org/javascript-escape-unescape

async function composePromptAndGetCompletion(transcription, proposalText, proposalNumber) {
  const proposalPrefix = "Given the following proposal:";
  const questions =
    "\n###\nQuestion 2. The following is a two part question: List if each argument is a A) pro B) con C) not applicable to the given proposal.\n Explain your reasoning for each. Give your answer in the following format: [argument number] [A/B/C] Reason: [reason]\n###\n";
  // const answerPriming = "\n###\nAnswer: \n1.";
  // const promptE = `${proposalPrefix}${proposalText}${questions}${transcription.response.completion}${answerPriming}`;
  const promptE = `${proposalPrefix}${proposalText}${questions}${transcription.response.completion}`;
  const response = await getCompletion(promptE);
  const res = {
    transcription,
    response,
    proposalText,
    proposalNumber,
  };
  return res;
}

async function transcriptionWithColumns(
  transcription,
  backupFile,
  proposalText = "",
  proposalNumber = 0
) {
  if (!fs.existsSync(`${backupFile}${proposalNumber}`)) {
    await fs.promises.mkdir(`${backupFile}${proposalNumber}`, {
      recursive: true,
    });
  }
  const writer = createWriteStream(`${backupFile}${proposalNumber}/backup.json`);
  const listObj = []
  for (let i = 0; i < transcription.length; i++) {
    const obj = await composePromptAndGetCompletion(
      transcription[i],
      proposalText,
      proposalNumber
    );
    listObj.push(obj)
  }
  writer.write(JSON.stringify(listObj));
  writer.end();
  return listObj;
}
export default transcriptionWithColumns;
