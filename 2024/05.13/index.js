const fs = require('fs');
const [n, input] = fs.readFileSync("./text.txt").toString().trim().split("\n");
// const inputArr = input.trim().split(" ");

// const sortedArr = inputArr.sort((a,b) => Number(a) - Number(b));
// let accumulate = 0;
// const waitingTime = sortedArr.map(num => {
//   accumulate += Number(num);
//   return accumulate
// })
// const result = waitingTime.reduce((acc, cur) => acc += cur, 0);
// console.log(result);

const inputArr = input.trim().split(" ").map(Number).sort((a,b) => a - b);

let sum = 0, total = 0;
for (let i = 0; i < n; i++) {
  sum += inputArr[i];
  total += sum;
}
console.log(total);
