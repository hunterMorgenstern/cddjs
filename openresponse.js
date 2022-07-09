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
console.log("!!!res2", removeNumbers(res));