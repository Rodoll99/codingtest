let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" ").map(Number));
result = '';
const min = input[0][1] 
for(let i = 0; i < input[1].length; i ++){
    if( input[1][i] < min ){
        result += input[1][i]+" "
    }
}

console.log(result.trim())