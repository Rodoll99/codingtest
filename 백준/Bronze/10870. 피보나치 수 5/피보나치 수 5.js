let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();
let N = Number(input)

function f(n){
    if (n == 0){
        return 0;
    }else if(n==1) return 1;

    else return f(n-1) + f(n-2)
  
}
console.log(f(N))