let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
var arr = input.splice(0,1)
console.log(input.sort((a,b)=> a-b).join("\n"))

