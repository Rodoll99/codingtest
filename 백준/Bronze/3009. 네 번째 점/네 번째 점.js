const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n").map(a=> a.split(" "));
var W = new Map();
var H = new Map();
let x
let y
for(let i = 0 ; i < input.length; i++){
    W.set(input[i][0], (W.get(input[i][0]) || 0)+1)
    H.set(input[i][1], (H.get(input[i][1]) || 0)+1)
}

for(let[key,value] of W){
    if(value == 1){
        x = key
    }
}
for(let[key,value] of H){
    if(value == 1){
        y = key
    }
}
console.log(x,y)

