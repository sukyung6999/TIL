const { log } = require('console');
const fs = require('fs');
let [input, ...coins] = fs.readFileSync("./text.txt").toString().trim().split("\n");
let [n, total] = input.trim().split(" ");

let count = 0, num = 0;
coins = coins.map(Number);
for(let i = n - 1; i >= 0; i--) {
  if (coins[i] <= total) {
    num = Math.floor(total / coins[i]);
    count += num;
    total = total % (coins[i] * num);
  }
}
console.log(count);
