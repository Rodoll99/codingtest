const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(a => a.split(" ").map(Number));

for(let i = 0; i < input.length; i++){
    let [A,B] = input[i]
    if( A == 0 && B == 0){
        break;
    }
    if( B % A == 0){
        console.log("factor")
    }else if( A % B == 0){
        console.log("multiple")
    }else{
        console.log("neither")
    }

}