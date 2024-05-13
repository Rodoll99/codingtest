
let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" "));
console.log(input[1][0].split("").map(Number).reduce((a,b)=> a+b))