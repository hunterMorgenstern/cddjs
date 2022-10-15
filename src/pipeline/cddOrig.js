import * as fs from "fs";
import { createWriteStream } from "fs";
import getCompletion from "./tools/openai.js";
import formatCompletion from "./cddCSVFromOrig.js";
// https://codebeautify.org/javascript-escape-unescape

async function composePromptAndGetCompletion(transcription, proposalText) {
  const instructions =
    "what is the person talking about? keep that in mind while answering the following:\n\n1. are they for, against or undecided on it?\n2. is their sentiment positive, negative or neutral?\n3. can you summarize their points?\n4. do they support their points with facts or anecdotes?\n5. if they support their point with facts, what are the facts?\n6. if they support their point with anecdotes, what are the anecdotes?\n7. can you quote the anecdote?\n8.  what are the claims they make?\n9. what are the premises they rely on?\n10. what topic are they talking about?\n\nanswer these questions with the following transcript:\n";
  const promptE = `${instructions}\"${transcription.Text}\"`;
  console.log(promptE);
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
    const formattedForCsv = formatCompletion(obj.response.completion);
    obj.formatted = formattedForCsv;
    console.log(formattedForCsv);
    writer.write(JSON.stringify(obj) + ",");
  }
  writer.write("]");
  writer.end();
  return;
}
export default transcriptionWithColumns;
