
let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" ").map(Number));
var arr = [];
for(let i = 0; i < input.length; i ++){
    arr.push( input[i] % 42 )
}
result = [...new Set(arr)];
console.log(result.length)
