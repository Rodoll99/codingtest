let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();
var N = Number(input)
var answer = 0;
while(true){
    if(N % 5 == 0){
        answer += N/5 
        console.log(answer)
        break;
    }
    N -= 3
    answer ++;
    if(N < 0){
        console.log(-1)
        break;
    }
}


