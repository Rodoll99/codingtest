const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

//답을 출력하기위한 출력문
for(let i = 1; i<input.length; i++){
    console.log(solution(input[i]))
}

//change라는 이름의 함수 생성
function solution(change){
    //동전의 갯수를 카운트
    let count = [0,0,0,0];
    //각 동전의 가치를 할당
    let coins = [25,10,5,1]

    for(let i = 0; i < coins.length; i++){
        //count의 i 를 Math.floor(반내림) change/coins[i]으로 할당
        //ex) 첫 줄이 124의 거스름돈이라면 124/25를 반내림한 가격이 출력됨
        count[i] += Math.floor(change/coins[i])
        //change를 25로 나눈 나머지를 change에 할당
        change %= coins[i]
    }
    //리턴값을 join을 이용해 구분자로 띄어쓰기를 줌
    return count.join(' ')
    
}