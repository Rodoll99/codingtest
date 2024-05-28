const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

var arr2 = []
for(let num of input){
    if(num == -1){
        break;
    }
    let arr = [];
    for(let i = 1 ; i < num ; i ++){
        if(num % i == 0){
            arr.push(i)
        }
    }
    arr2.push(arr)
}
for(let i = 0 ; i <arr2.length; i ++){
    if(arr2[i].reduce((a,b)=>a+b) == input[i]){
        console.log(`${input[i]} = ${arr2[i].join(" + ")}`)
    }else{
        console.log(`${input[i]} is NOT perfect.`)
    }
}

