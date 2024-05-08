let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" ").map(Number));
for( i = 0 ; i < input.length; i ++){
    let A = input[i][0];
    let B = input[i][1];
    console.log(A+B)
}
