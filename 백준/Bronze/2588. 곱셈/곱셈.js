const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

//(1)번
const num0 = Number(input[0]);
//(2)번
const num1 = Number(input[1]);

// 385를 10으로 나눈 나머지 = 5
const a = num1 % 10;
// 385를 100으로 나눈 나머지 85를 10으로 나누고 Math.floor()를 사용해서 나머지 제거
const b = Math.floor((num1 % 100) / 10);
//385를 100으로 나눠서 소수점 제거
const c = Math.floor(num1 / 100);

// (3)번
console.log(num0 * a);
// (4)번
console.log(num0 * b);
// (5)번
console.log(num0 * c);
// (6)번
console.log(num0 * num1);