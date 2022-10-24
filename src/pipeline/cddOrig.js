import * as fs from "fs";
import { createWriteStream } from "fs";
import getCompletion, { getFactCompletion } from "./tools/openai.js";
import formatCompletion from "./cddCSVFromOrig.js";
import formatFacts from "./cddGrabFacts.js"
import formatAnecdotes from "./cddGrabAnecdotes.js"

// https://codebeautify.org/javascript-escape-unescape

async function composePromptAndGetCompletion(transcription, proposalText) {
  const instructions =
    "Given the following proposal: '"+proposalText+"', what are the related facts in transcript?\n\n Answer this question in the following transcript:\n";
    // "what is the person talking about? keep that in mind while answering the following:\n\n1. are they for, against or undecided on it?\n2. is their sentiment positive, negative or neutral?\n3. can you summarize their points?\n4. do they support their points with facts or anecdotes?\n5. if they support their point with facts, what are the facts?\n6. if they support their point with anecdotes, what are the anecdotes?\n7. can you quote the anecdote?\n8.  what are the claims they make?\n9. what are the premises they rely on?\n10. what topic are they talking about?\n\nanswer these questions with the following transcript:\n";
  const promptE = `${instructions}\"${transcription.Text}\"`;
  console.log(promptE);
  const response = await getFactCompletion(promptE);

  const res = {
    transcription,
    response,
  };
  return res;
}

async function composeAnecdoteAndGetCompletion(transcription, proposalText) {
  const instructions =
    "Given the following proposal: '"+proposalText+"', what are the related anecodotes in transcript?\n\n Answer this question in the following transcript:\n";
    // "what is the person talking about? keep that in mind while answering the following:\n\n1. are they for, against or undecided on it?\n2. is their sentiment positive, negative or neutral?\n3. can you summarize their points?\n4. do they support their points with facts or anecdotes?\n5. if they support their point with facts, what are the facts?\n6. if they support their point with anecdotes, what are the anecdotes?\n7. can you quote the anecdote?\n8.  what are the claims they make?\n9. what are the premises they rely on?\n10. what topic are they talking about?\n\nanswer these questions with the following transcript:\n";
  const promptE = `${instructions}\"${transcription.Text}\"`;
  console.log(promptE);
  const response = await getFactCompletion(promptE);

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
  const writer = createWriteStream(`${backupFile}/backup.json`);
  const listObj = []
  for (let i = 0; i < transcription.length; i++) {
    const objFact = await composePromptAndGetCompletion(
      transcription[i],
      proposalText
    );

    listObj.push(objFact)
    
    // const objAnec = await composeAnecdoteAndGetCompletion(
    //   transcription[i],
    //   proposalText
    // );

    const formattedForCsv = formatFacts(objFact.response.completion);
    // const formatteddAnecdotes = formatAnecdotes(objAnec.response.completion)
    objFact.formatted = formattedForCsv;
    // objAnec.formatted = formatteddAnecdotes;
    // console.log(formattedForCsv);
    // console.log(formatteddAnecdotes)
    
  }
  writer.write(JSON.stringify(listObj));
  writer.end();
  return;
}
export default transcriptionWithColumns;
