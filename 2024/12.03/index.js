const fs = require('fs');
const [_, input] = fs.readFileSync("./text.txt").toString().trim().split("\n");
const inputArr = input.trim().split(" ").map(Number);
const result = [];

inputArr.forEach((num, idx) => {
  result.splice(result.length - num,0, idx + 1)
})
console.log(result);