let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" "));
if(input[0][0] !== ''){
    console.log(input[0].length)
}
else if(input[0][0] == ''){
    console.log("0");
}
