import * as fs from "fs";
import { createWriteStream } from "fs";
import getCompletion from "./tools/openai.js";
// https://codebeautify.org/javascript-escape-unescape

async function composePromptAndGetCompletion(transcription, proposalText) {
  const transcriptPrefix = 'speaker: "';
  const questions = "\"\n###\nQuestion 1. List this speaker's arguments:\n";

  const promptE = `${transcriptPrefix}${transcription.text}${questions}`;
  const response = await getCompletion(promptE);
  const res = {
    transcription,
    response,
  };
  return res;
}

async function transcriptionWithColumns(
  transcription,
  backupFile,
  proposalText = ""
) {
  if (!fs.existsSync(backupFile)) {
    await fs.promises.mkdir(backupFile, { recursive: true });
  }
  const writer = createWriteStream(`${backupFile}/backup.js`);
  writer.write("export default [");
  for (let i = 0; i < transcription.length; i++) {
    const obj = await composePromptAndGetCompletion(
      transcription[i],
      proposalText
    );
    writer.write(JSON.stringify(obj) + ",");
  }
  writer.write("]");
  writer.end();
  return;
}
export default transcriptionWithColumns;
