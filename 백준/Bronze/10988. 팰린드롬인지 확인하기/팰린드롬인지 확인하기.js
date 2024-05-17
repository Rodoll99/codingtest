let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" "));
input = input.flat();
const str = input[0].split("").join("")
const str1 = input[0].split("")
const reverseStr = str1.reverse().join("");

console.log( str === reverseStr ? 1: 0 )