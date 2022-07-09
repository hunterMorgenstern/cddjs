
import dotenv from 'dotenv'
dotenv.config()
import { Configuration, OpenAIApi } from "openai";
import withTokenCount from './withTokenCount';
// https://codebeautify.org/javascript-escape-unescape

// console.log('!!!process.env',process.env);
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const instructions = "what is the person talking about? keep that in mind while answering the following:\n\n1. are they for, against or undecided on it?\n2. is their sentiment positive, negative or neutral?\n3. can you summarize their points?\n4. do they support their points with facts or anecdotes?\n5. if they support their point with facts, what are the facts?\n6. if they support their point with anecdotes, what are the anecdotes?\n7. can you quote the anecdote?\n8.  what are the claims they make?\n9. what are the premises they rely on?\n10. what topic are they talking about?\n\nanswer these questions with the following transcript:"
const transcript = withTokenCount[0].text
const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: `${instructions}${transcript}`,
  temperature: 0,
  max_tokens: 100,
  top_p: 0.02,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  stop: ["\n"],
});

// output = `${response.choices[0].text}`;
// console.log(output);
console.log('!!!response',response.data.choices);