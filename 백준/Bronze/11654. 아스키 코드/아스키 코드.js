
let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" "));
var asc = input.flat();
//charCodeAt(0) -> 아스키코드를 출력해줌
console.log(asc[0].charCodeAt(0))