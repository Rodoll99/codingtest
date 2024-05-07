let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().split(" ");

var A = input[0]
var answer = ''
for(let i = 0; i<A; i ++){
    answer += "*"
    console.log(answer)
}
