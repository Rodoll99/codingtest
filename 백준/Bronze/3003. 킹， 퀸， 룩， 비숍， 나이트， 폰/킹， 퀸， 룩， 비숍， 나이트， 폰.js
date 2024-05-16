let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" ").map(Number));
input = input.flat();
var cost = [1,1,2,2,2,8]
var result = [];
for(let i = 0; i <input.length; i ++){
    result.push(cost[i] - input[i])
}
console.log(result.join(" "))
