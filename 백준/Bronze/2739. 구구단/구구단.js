
let fs = require('fs');
// trim을 이용해 앞뒤 공백 제거 , 줄바꾼대로 나누어 배열에 담고 그요소를 한번더 띄어쓰기를 기준으로 나누어 배열에 저장
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

var A = Number(input[0]);

for(let i = 1; i < 10; i++){
    console.log(A+' * '+i+' = '+A*i)
}

