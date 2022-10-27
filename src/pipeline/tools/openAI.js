import dotenv from "dotenv";
dotenv.config();
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function getCompletion(prompt) {
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    temperature: 0.08,
    max_tokens: 256,
    top_p: 0.06,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  return {
    config: response.config.data,
    completion: response.data.choices[0].text,
  };
}

export async function getFactCompletion(prompt) {
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    temperature: 0.0,
    max_tokens: 256,
    top_p: 0.01,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  return {
    config: response.config.data,
    completion: response.data.choices[0].text,
  };
}

