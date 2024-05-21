const fs = require("fs");
let [num, divider] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map((item) => Number(item));
//toString의 인자에는 x를 넣어 x진법으로 만들 수 있음
//toString <-> parseInt
let result = num.toString(divider).toUpperCase();

console.log(result)