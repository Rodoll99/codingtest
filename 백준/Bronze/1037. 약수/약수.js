let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" ").map(Number));

let arr = input[1].sort((a,b)=> a-b)


let fNum = arr[0]
let lNum = arr[arr.length-1]

let answer = 0;

arr.length >= 2? answer = fNum * lNum : answer = fNum * fNum
console.log(answer)