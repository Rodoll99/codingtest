const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
sum = (BigInt(input)*BigInt(input-1)*BigInt(input-2))/BigInt(6)
console.log(String(sum))
console.log(3)