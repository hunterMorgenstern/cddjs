import withTokenCount from "./withTokenCount.js";
// group objects by author and sort by order
const byAuthor = withTokenCount.reduce((acc, curr) => {
  const author = curr.author;
  if (!acc[author]) {
    acc[author] = [];
  }
  acc[author].push(curr);
  return acc;
}, {});
// sort each authors array by order
const authorTranscriptsSortedByOrder = Object.keys(byAuthor).map((author) => {
  const transcriptions = byAuthor[author];
  const sorted = transcriptions.sort((a, b) => a.order - b.order);
  return sorted;
});

console.log(authorTranscriptsSortedByOrder);

// combine the two functions byAuthor and authorTranscriptsSortedByOrder in to one function
