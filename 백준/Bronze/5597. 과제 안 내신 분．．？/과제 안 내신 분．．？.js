
let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" ").map(Number));
var arr = [];
var arr2 = input.flat();
input.sort((a,b) => a-b)   
for(let i= 1; i <= 30; i ++){
 arr.push(i)
}
var result = arr.filter(a=> !arr2.includes(a));
console.log(result.join("\n"))