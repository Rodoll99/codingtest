
let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" ").map(Number));
//Math.max / min 등은 스프레드 연산자 필수
var max = Math.max(...input[1])
var arr = [];
for(let i = 0 ; i < input[1].length; i++){
    arr.push(input[1][i] / max * 100)
}
console.log(arr.reduce((a,b) => a+b) / input[0])
