const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString()
// .trim().split("").map(Number);
let N = Number(input)
console.log(N*4)
