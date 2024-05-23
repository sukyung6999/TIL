const fs = require('fs');
const [n, ...inputs] = fs.readFileSync("./text.txt").toString().trim().split("\n");

let time = 0, count = 0;
const arr = inputs.map(ele => ele.split(' '));
arr.sort((a,b) => a[0] - b[0]);
for (let i = 1; i < n; i++) {
  const first = arr[i - 1][1] - arr[i - 1][0];
  const second = arr[i][1] - arr[i][0];
  // const min = Math.min(first, second);

  if (first < second) {
    if (time <= arr[i-1][0]) {
      time = +arr[i - 1][1];
      count++;
    }
  } else {
    if (time <= arr[i][0]) {
      time = +arr[i][1];
      count++;
    }
  }
  // console.log(time);
}
console.log(count);