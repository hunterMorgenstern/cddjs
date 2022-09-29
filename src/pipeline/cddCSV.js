import dotenv from "dotenv";
dotenv.config();
import { createWriteStream } from "fs";
import * as fs from "fs";
import { stringify } from "csv-stringify";

export default async function formatAndWriteToCsv(proposal, jsonCompletions, csvResultsRepo) {
  if (!fs.existsSync(csvResultsRepo)) {
    await fs.promises.mkdir(csvResultsRepo, { recursive: true });
  }
  const destinationFileName = `${csvResultsRepo}${proposal}.csv`;
  const columns = ["order", "author", "summary", "pros", "text"];
  const writableStream = createWriteStream(destinationFileName);
  const stringifier = stringify({ header: true, columns: columns });
  jsonCompletions.forEach((fullResult) => {
    const formattedForCsv = formattedJsonToCsv(fullResult);
    stringifier.write(formattedForCsv);
  });
  stringifier.pipe(writableStream);
}

// turn json to array  which order matches the columns order
function formattedJsonToCsv(fullResult) {
  const order = fullResult.transcription.transcription.order;
  const author = fullResult.transcription.transcription.author;
  const text = fullResult.transcription.transcription.text;
  const summary = fullResult.transcription.response.completion;
  const pros = fullResult.response.completion;
  return [order, author, summary, pros, text];
}
