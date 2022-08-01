import fs from 'fs';
import testSample from "/Users/hunter/dev/fr/CDD/data/Docs4FileRead/sacklerdepoFormatted.js"
const s = (await fs.promises.stat("/Users/hunter/dev/fr/CDD/data/Docs4FileRead/sacklerdepoFormatted.js")).size
console.log(s)