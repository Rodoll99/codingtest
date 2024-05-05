
let fs = require('fs');
// trim을 이용해 앞뒤 공백 제거 , 줄바꾼대로 나누어 배열에 담고 그요소를 한번더 띄어쓰기를 기준으로 나누어 배열에 저장
let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(x=> x.split(" "));

var H = Number(input[0][0]);
var M = Number(input[0][1]);
const costM = Number(input[1][0])

var cookedM = M + costM;

if (cookedM > 59) {
    // 만약 분이 80이라면 60으로 나누면 1.333 ... 여기서 Math.floor를 사용해 1만증가시킴
    // 120분이라면 60으로 나누었을때 2가 되는 원리
    H += Math.floor(cookedM / 60); 

    //cookedM 을 60으로 나누었을때에 나머지 73 이라면 60으로 나누었을때 나머지는 13이 됨
    cookedM %= 60; 
}

if (H > 23) {
    // 26시가 됐다면 24로 나눈 나머지 2가 시간이 되는 원리
    H %= 24; // 시간이 24를 넘어가면 24로 나눈 나머지가 새로운 시간이 됨
}

console.log(H + " " + cookedM);