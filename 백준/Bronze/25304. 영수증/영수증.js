let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(a=> a.split(" "));
var cost = [];

for(let i = 2 ; i<input.length; i ++){
    cost.push((input[i][0] * input[i][1]))
}
costAll = cost.reduce((a,b) => a+b)

if(costAll == input[0][0]){
    console.log("Yes")
}else{
    console.log("No")
}

