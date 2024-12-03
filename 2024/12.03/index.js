const fs = require('fs');
const [_, input] = fs.readFileSync("./text.txt").toString().trim().split("\n");
const inputArr = input.trim().split(" ");
let result = '';

inputArr.forEach((num, idx) => {
  result = result.slice(0, result.length - num) + (idx + 1) + result.slice(-num)
})
console.log(result.split('').join(' '));