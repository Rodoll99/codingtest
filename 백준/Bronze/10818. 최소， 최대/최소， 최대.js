
let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" ").map(Number));
var arr = input[1];
// 배열을 직접 주는건 불가능함 . 스프레드 연산자를 이용해 풀어주어야 합니다!!
const A = Math.max(...arr)
const B = Math.min(...arr)
console.log(B+" "+A)