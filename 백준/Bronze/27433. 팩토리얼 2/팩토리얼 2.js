let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();
let N = Number(input)

const factorial = (num) => {
    if(num == 0 || num == 1) return 1;
    else return num * factorial(num-1);
}
console.log(factorial(N))