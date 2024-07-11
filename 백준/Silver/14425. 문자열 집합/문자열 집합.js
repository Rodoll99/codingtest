const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
//문자열 S 배열의 요소 갯수 구하기
const [n] = input.shift().split(" ").map(Number);
const strInput = input.map((i) => i.trim());
const list = strInput.slice(0, n);
const candidate = strInput.slice(n);
const set = new Set(list);

let ans = 0;
candidate.forEach((str) => {
  if (set.has(str)) ++ans;
});

console.log(ans);