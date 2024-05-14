
let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" "));
input = input.flat();
var A = Number(input[0].split("").reverse().join(""));
var B = Number(input[1].split("").reverse().join(""));
console.log(A > B ? A : B)