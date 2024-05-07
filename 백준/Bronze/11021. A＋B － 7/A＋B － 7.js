let fs = require('fs');
// trim을 이용해 앞뒤 공백 제거 , 줄바꾼대로 나누어 배열에 담고 그요소를 한번더 띄어쓰기를 기준으로 나누어 배열에 저장
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(a=>a.split(" ").map(Number));
var length = input[0][0];

for(let i = 1; i<length+1; i ++){
    var A = (input[i][0] + input[i][1])
    console.log('Case #'+i+": "+A)
}
