import * as fs from "fs";
import { createWriteStream } from "fs";
import getCompletion from "./tools/openai.js";
// https://codebeautify.org/javascript-escape-unescape

async function composePromptAndGetCompletion(transcription, proposalText) {
  const proposalPrefix = "Given the following proposal:";
  const questions =
    "\n###\nQuestion 2. List if each argument is a A) pro B) con C) not applicable to the given proposal.\n";
  const promptE = `${proposalPrefix}${proposalText}${questions}${transcription.response.completion}`;
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
