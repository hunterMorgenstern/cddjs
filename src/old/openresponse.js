const response = [
  {
    text: "\n\n1. The person is against the farm tax.\n2. The sentiment is negative.\n3. The person's points are that the tax will make it hard for farmers to pay for their equipment, and that they may have to sell part of their farm.\n4. The person supports their points with facts.\n5. The facts are that the tax will make it hard for farmers to pay for their equipment, and that they may have to sell part of their farm.\n6. There are no anecdotes.\n7. There are no quotes.\n8. The claims are that the tax will make it hard for farmers to pay for their equipment, and that they may have to sell part of their farm.\n9. The premises are that the tax will make it hard for farmers to pay for their equipment, and that they may have to sell part of their farm.\n10. The topic is the farm tax.",
    index: 0,
    logprobs: null,
    finish_reason: "stop",
  },
];

const lines = response[0].text.split("\n");
// remove empty strings from  lines
const res = lines.filter((line) => line.length > 0);
// console.log("!!!lines", res);
// map over res and  create  an object  where  the key is the column name and the value is the line without "1. "
const removeNumbers = (res) => res.map((line) => {
  // TODO proper regex to remove "1. " or "2. " or "3. " from the line
  const lineWithoutNumber = line.replace(/^\d+\. /, "");
  return lineWithoutNumber
});
const formatCompletion = (responseText) => {
  const lines = responseText.split("\n");
  const cleanedLines = lines.filter((line) => line.length > 0);
  const columns = {
    topic: null, // 10
    "summary of points": null, // 3
    "what facts, if any?": null, //5
    "what anecdotes, if any?": null, //6
    "anecdote quote": null, //7
    "original transcript": null, //transcript.text
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
      columns["summary of points"] = string;
    }
  });
  return columns;
};
console.log("!!!formatCompletion(", formatCompletion(response[0].text));

// add columns to transcript respective transcript
// group by author and sort by order
export default formatCompletion;