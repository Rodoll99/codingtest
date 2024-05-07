let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(a=>a.split(" ").map(Number));
var length = input[0][0];

for(let i = 1; i<length+1; i ++){

    var A = (input[i][0] + input[i][1])
    var B = input[i][0]
    var C = input[i][1]
    console.log('Case #'+i+": "+B+" + "+C+" = "+A)
}
