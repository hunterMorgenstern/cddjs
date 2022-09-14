import dotenv from "dotenv";
dotenv.config();
import { createWriteStream } from "fs";
import { stringify } from "csv-stringify";
import jsonCompletion from "/Users/hunter/dev/fr/CDD/results/CDD/climate/listArgsThenPros256take9/backup.js";

function formatAndWriteToCsv(jsonCompletions, csvResultsRepo) {
  // console.log('!!!jsonCompletions',jsonCompletions);
  const proposal = "q5n";
  const destinationFileName = `${csvResultsRepo}/${proposal}.csv`;
  const writableStream = createWriteStream(destinationFileName);
  const columns = ["order", "author", "summary", "pros", "text"];
  const stringifier = stringify({ header: true, columns: columns });
  jsonCompletions.forEach((fullResult) => {
    // console.log("!!!fullResult", fullResult);

    // const author = 'chrontranscript';
    const formattedForCsv = formattedJsonToCsv(fullResult);

    console.log("!!!formattedForCsv", formattedForCsv);
    stringifier.write(formattedForCsv);
    // pipeToCsv(formattedForCsv, filename, columns);
  });
  stringifier.pipe(writableStream);
}

// given columns and arrayOfRows in  the same order and pipe to csv
function pipeToCsv(arrayOfRows, destinationFileName, columns) {
  const writableStream = createWriteStream(destinationFileName);
  const stringifier = stringify({ header: true, columns: columns });

  arrayOfRows.forEach((summaries) => {
    stringifier.write(summaries);
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
formatAndWriteToCsv(
  jsonCompletion,
  "/Users/hunter/dev/fr/CDD/results/CDD/climate/listArgsThenPros256take9"
);

// step one convert to json to feed to api piecewise
//
