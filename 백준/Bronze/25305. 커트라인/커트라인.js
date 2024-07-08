let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" ").map(Number));
var arr = input[1]
console.log(arr.sort((a,b) => b-a)[input[0][1]-1])