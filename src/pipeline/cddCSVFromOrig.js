import dotenv from "dotenv";
dotenv.config();
import { createWriteStream } from "fs";
import * as fs from "fs";
import { stringify } from "csv-stringify";

const formatCompletion = (responseText) => {
  const lines = responseText.split("\n");
  const cleanedLines = lines.filter((line) => line.length > 0);
  const columns = {
    topic: null, // 10
    "summary of points": null, // 3
    "what facts, if any?": null, //5
    "what anecdotes, if any?": null, //6
    "anecdote quote": null, //7
    "for/against/undecided": null, //1
    "sentiment positive/negative/neutral": null, //2
    "facts or anecdotes": null, //4
    claims: null, //8
    premises: null, //9
  };

  cleanedLines.forEach((line) => {
    let string = line.replace(/^\d+\. /, "");
    if (line.startsWith("3. ")) {
      // TODO remove redunandant string bits
      columns["summary of points"] = string;
    }
    if (line.startsWith("5. ")) {
      columns["what facts, if any?"] = string;
    }
    if (line.startsWith("6. ")) {
      columns["what anecdotes, if any?"] = string;
    }
    if (line.startsWith("7. ")) {
      columns["anecdote quote"] = string;
    }
    if (line.startsWith("10. ")) {
      columns["topic"] = string;
    }
    if (line.startsWith("1. ")) {
      columns["for/against/undecided"] = string;
    }
    if (line.startsWith("2. ")) {
      columns["sentiment positive/negative/neutral"] = string;
    }
    if (line.startsWith("4. ")) {
      columns["facts or anecdotes"] = string;
    }
    if (line.startsWith("8. ")) {
      columns["claims"] = string;
    }
    if (line.startsWith("9. ")) {
      columns["premises"] = string;
    }
  });
  return columns;
};

export default formatCompletion;
	