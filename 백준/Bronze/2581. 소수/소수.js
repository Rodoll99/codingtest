const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const [M,N] = input
var arr = [];
//M과 N사이의 수를 구해 arr에 push한다.
//그리고 arr 배열을 돌며 각 수가 소수인지 판단한 후 소수만 남은 배열을 만들고 , 그 배열을 더한 값과 그 배열 중 최소 값을 구해 출력한다.

//M과 N사이의 수를 돌며 소수일 시에 arr에 push

if([M,N] == [1,1]){
    console.log(-1)
}else{
    for(let i = M ; i <= N ; i++){
        if(isPrime(i)){
            arr.push(i)
        }
    }
    if(arr.length == 0){
        console.log(-1)
    }else{
        console.log(arr.reduce((a,b) => a+b))
        console.log(Math.min(...arr))
        
        }
    }
     //소수인지 판단하는 함수를 만듦
     function isPrime(num){
        //1은 소수가 아님
        if(num === 1) return false;
        //Math.squrt(num) -> num의 제곱근을 반환함
        for(let i = 2; i <= parseInt(Math.sqrt(num)); i++){
            //인자로 받은 num 이 i로 나누어 진다면 그것은 소수가 아님
            if(num % i === 0) return false;
        }
        //다 통과했다면 num은 소수임
        return true;
}
