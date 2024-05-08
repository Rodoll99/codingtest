
let fs = require('fs');
let input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n").map(a=> a.split(" ").map(Number));
var arr = [];
for(let i = 0 ; i <input.length; i ++){
    arr.push(input[i][0])
}
max = Math.max(...arr)
result = arr.indexOf(Math.max(...arr))+1
console.log(max+"\n"+result)