let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" "));
for(let i = 0; i < input.length; i ++){
    console.log(input[i].join(" "))
}
