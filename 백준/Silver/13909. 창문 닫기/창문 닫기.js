let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split(" ").map(Number);

console.log(Math.floor(Math.sqrt(input[0])))
