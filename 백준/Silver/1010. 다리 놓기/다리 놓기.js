let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" ").map(Number));

let a = input.shift();
const factorial = (num) => {
    if(num == 0 || num == 1) return 1;
    else return num * factorial(num-1);
}

for(let i = 0; i < a ; i++){
    let [a,b] = input[i] 
    console.log(Math.round((factorial(b)/(factorial(b-a) * factorial(a)))));
}