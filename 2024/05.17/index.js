const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

const arr = [1, 2];
for (let i = 2; i < Number(input); i++) {
  arr[i] = (arr[i - 1] + arr[i - 2]) % 10007; 
}
console.log(arr[input - 1]);