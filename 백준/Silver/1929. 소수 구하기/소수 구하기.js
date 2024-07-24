let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(a=>a.split(" ").map(Number));

input = input.flat();
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
for(let i = input[0]; i <= input[1] ; i++){
    answer.push(i)
}
console.log(answer.filter(a => isPrime(a)).join("\n"))

