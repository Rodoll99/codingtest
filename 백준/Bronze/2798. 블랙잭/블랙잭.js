const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(a=> a.split(" ").map(Number));
var cardLen = input[0][0]
var sumLimit = input[0][1]
var cardNum = input[1]
var all = [];
for(let i = 0; i<cardNum.length; i++){
    for(let j = i+1; j < cardNum.length; j++){
        for(let k = j+1 ; k<cardNum.length; k++){
            if(cardNum[i]+cardNum[j]+cardNum[k] <= sumLimit){
                all.push(cardNum[i]+cardNum[j]+cardNum[k])
            }
        }
    }
}
all.sort((a,b) => a-b)
console.log(all[all.length-1])
