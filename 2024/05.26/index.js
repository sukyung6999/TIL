const fs = require('fs');
const [n, ...inputs] = fs.readFileSync("./text.txt").toString().trim().split("\n");

const arr = inputs.map(ele => ele.split(' '));
let time = 0, count = 0;
arr.sort((a,b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0]
  } else {
    return a[1] - b[1]
  }
});
arr.forEach((item) => {
  if (item[0] >= time) {
    count++;
    time = Number(item[1]);
  }
}) 
console.log(count);