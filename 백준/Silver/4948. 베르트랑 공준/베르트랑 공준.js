let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
var answer = [];
// 소수인지 검사하는 펑션 => 자주쓰이니 외워둘것
function isPrime(n){
    //만약 n 이 2보다 작다면 소수가 아님
    if(n<2){
        return false;
    }
    //2부터 시작해서 받아온수의 제곱근만큼 반복함
    for(let i = 2; i <= Math.sqrt(n); i++){
        //만약 n이 i로 나눠지면 그것또한 소수가 아님
        if(n%i == 0) return false;
    }
    //모든 조건을 통과했다면 그것은 소수인것임
    return true;
}
for(let x of input){
    let arr = [];
    let a = x
    let b = x*2
    for(let i = a+1 ; i <= b; i++){
        arr.push(i)
    }
    answer.push(arr.filter(a=> isPrime(a)).length)
}
answer.pop();
console.log(answer.join("\n"))

