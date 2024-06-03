const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let N = input[0]
const answer = [];
for(let i = 2; i <= N; i ++){
    while(N % i === 0){
        N /= i;
        answer.push(i) 
    }
    if(N == 1){
        break;
    }
}
console.log(answer.join("\n"))