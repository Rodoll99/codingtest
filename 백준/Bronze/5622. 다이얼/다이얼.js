let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" "));
input = input.flat();
var dial = ['','ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ']
var result = [];
for(let i = 0; i <input[0].length ; i++){
    for( let j = 0; j<dial.length; j ++){
        if(dial[j].includes(input[0][i])){
            result.push(dial.indexOf(dial[j])+2)
        }
    }
}
console.log(result.reduce((a,b) => a+b))
