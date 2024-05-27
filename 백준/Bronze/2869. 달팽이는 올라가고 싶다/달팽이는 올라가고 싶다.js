const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let N = input
let [up , down , height] = input;

console.log(Math.ceil((height - down) / (up - down)))