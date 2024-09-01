let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("").map(Number);

console.log(2 ** input[0])