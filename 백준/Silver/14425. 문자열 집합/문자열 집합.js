let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
var [N,M] = input[0].split(" ").map(Number)
input.shift();
const strInput = input.map((i) => i.trim());
const list = strInput.slice(0,N)
const Mlist = strInput.slice(N)
const set = new Set(list)
var answer = 0;
for(let x of Mlist){
    if(set.has(x))
    answer ++;
}
console.log(answer)