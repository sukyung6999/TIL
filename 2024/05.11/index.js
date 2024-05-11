const fs = require('fs');
const [n, ...input] = fs.readFileSync("./text.txt").toString().trim().split("\n");

const arr = [[1,0],[0,1]];
for(let i = 2; i <= 40; i++) {
    arr[i] = [arr[i - 1][0] + arr[i - 2][0], arr[i - 1][1] + arr[i - 2][1]]
}
for(let i = 0; i < n; i++) {
    const num = Number(input[i]);
    console.log(arr[num][0], arr[num][1]);
}
