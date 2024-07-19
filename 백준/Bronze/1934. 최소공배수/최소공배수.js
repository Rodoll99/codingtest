const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const iter = Number(input.shift());

let ans = [];

for(let i = 0; i < iter; i++){
    let [a, b] = input[i].split(" ").map((item) => Number(item));
    
    let originala = a;
    let originalb = b;
    
    // 유클리드 호세법
    // while문이 끝나면 최대공약수는 b가 된다.
    while(a % b !== 0){
        let r = a % b;
        
        if(r !== 0){
            a = b;
            b = r;
        }
    }
    
    // 최소공배수
    // 최소공배수 = 자연수1 * 자연수2 / 최대공약수
    let min = originala * originalb / b;
    ans.push(min);
}

console.log(ans.join("\n"));