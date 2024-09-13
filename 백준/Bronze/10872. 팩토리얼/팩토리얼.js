let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();
var A = Number(input)

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;  // 0! = 1이고, 1! = 1이므로 바로 1을 반환
    }
    return n * factorial(n - 1);  // 재귀적으로 팩토리얼을 구함
}
 
console.log(factorial(A));  // 5! = 120이 출력됨
