const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let N = parseInt(input);
let dot = 2;
for(let i=0; i<N; i++){
    // 모든 0제곱은 1이다.

    // Math.pow(2,i) 대신 2 ** i 를 써서 제곱을 표현 가능
    dot += 2 ** i
};
console.log(Math.pow(dot, 2))
// 한 줄의 사각형의 갯수 = 2ⁿ
// 한 줄의 꼭짓점의 갯수 = 한 줄의 사각형의 갯수 + 1 = 2ⁿ + 1
// 총 꼭짓점의 갯수 = 한 줄의 꼭짓점의 갯수² = (2ⁿ + 1)²
// 2**N 을 쓰면 2의 N제곱이라는 말로도 쓸수있다. 