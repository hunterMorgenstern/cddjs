import fs from  'fs';
import { withTokens } from './ideal.js';

const content = 'Some content!';
export default function writeToFile(value, file){
fs.writeFile(file, JSON.stringify(value), err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
}