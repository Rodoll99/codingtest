let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(a=>a.split(" ").map(Number))

input.shift(0);
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

//input의 길이가 0이 아닌동안에 계속 진행
while(input.length !== 0){
    //소수인지 판별했을때 true라면 answer 에 소수를 추가하고 input에서 요소를 제거함
    if(isPrime(input[0])){
        answer.push(input[0]);
        input.shift();
        //그게 아니라면 input[0] 은 1씩 증가하며 게속 가장 작은 소수를 판별함
    }else{
        input[0]++;
    }
}
console.log(answer.join("\n"))