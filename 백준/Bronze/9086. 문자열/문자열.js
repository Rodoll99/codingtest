let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" "));
for(let i = 1 ; i < input.length ; i ++){
    console.log(input[i][0][0]+input[i][0][input[i][0].length-1])
}
