const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
var sum = BigInt(input)
console.log(`${sum*sum*sum}`)
console.log(3)