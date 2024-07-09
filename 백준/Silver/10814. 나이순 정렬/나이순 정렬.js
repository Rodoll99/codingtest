let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
input.shift(); // 첫 번째 줄 제거
var arr = input.map(a => a.split(" "))
arr.sort((a,b)=> a[0] - b[0])
console.log(arr.map(a=> a.join(" ")).join("\n"))
