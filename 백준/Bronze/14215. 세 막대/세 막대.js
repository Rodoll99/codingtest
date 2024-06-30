const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

input.sort((a, b) => b - a);

let a = input[0];
let b = input[1];
let c = input[2];

// 삼각형의 조건을 확인
if (a < b + c) {
    // 삼각형이 성립할 때
    console.log(a + b + c);
} else {
    // 삼각형이 성립하지 않을 때
    console.log(2 * (b + c) - 1);
}
