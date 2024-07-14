const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const A = new Set(input[1].split(" "));
const B = new Set(input[2].split(" "));
const res = [...A, ...B].filter((n) => !(A.has(n) && B.has(n)));
console.log(res.length);