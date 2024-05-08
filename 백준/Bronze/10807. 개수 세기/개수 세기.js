
let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" ").map(Number));
var cnt = 0;
for( i = 0 ; i < input[1].length; i ++){
    if(input[1][i] == input[2][0]){
        cnt += 1;
    }
}

console.log(cnt);
