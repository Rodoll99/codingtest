
let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(a=> a.split(" ").map(Number));
answer = '';
for( i = 0 ; i < input.length; i ++){
    const A = Number(input[i][0]);
    const B = Number(input[i][1]);
    if( A + B == 0 ){
        break;
    }else{
        answer += A+B+"\n"
    }
}
console.log(answer)