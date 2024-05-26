const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let N = parseInt(input);

let range = 1 , block = 1;

while (block < N){
    block += 6 * range;
    range ++;
}
console.log(range);