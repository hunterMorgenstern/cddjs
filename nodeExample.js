import dotenv from "dotenv";
dotenv.config();
import { Configuration, OpenAIApi } from "openai";
import withTokenCount from "./withTokenCount.js";
import writeToFile from "./write.js";
// https://codebeautify.org/javascript-escape-unescape

// console.log('!!!process.env',process.env);
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// writeToFile(response.data.choices, "./openresponse.js");
export default async function getCompletion(transcript) {
  const instructions =
    "what is the person talking about? keep that in mind while answering the following:\n\n1. are they for, against or undecided on it?\n2. is their sentiment positive, negative or neutral?\n3. can you summarize their points?\n4. do they support their points with facts or anecdotes?\n5. if they support their point with facts, what are the facts?\n6. if they support their point with anecdotes, what are the anecdotes?\n7. can you quote the anecdote?\n8.  what are the claims they make?\n9. what are the premises they rely on?\n10. what topic are they talking about?\n\nanswer these questions with the following transcript:\n";
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
// group withTokenCount by author using the groupedByAuthor function
const byAuthor = groupedByAuthor(withTokenCount);
// sort each authors array by order using the authorTranscriptsSortedByOrder function
const authorTranscriptsSortedByOrder = authorTranscriptsSortedByOrder(byAuthor);

const withCompletions = authorTranscriptsSortedByOrder.forEach(
  (authorTranscripts) => {
    return authorTranscripts.map((transcription) => {
      return {
        ...transcription,
        completion: getCompletion(transcription.text),
      };
    });
  }
);

// we now habe the data,  but we need to write it to a csv file in the proper format
// should only  be the necessary  columns
// should trim the text  from  redundant strings
// should know the author
