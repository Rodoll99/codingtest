let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
input.shift();
let stack = [];
for(let x of input){
    x = Number(x)
    if( x !== 0){
        stack.push(x)
    }else if( x == 0){
        stack.pop();
    }
}
if(stack.length){
    console.log(stack.reduce((a,b) => a+b))
}else{
    console.log(0)
}

