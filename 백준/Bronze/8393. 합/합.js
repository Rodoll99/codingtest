
let fs = require('fs');
// trim을 이용해 앞뒤 공백 제거 , 줄바꾼대로 나누어 배열에 담고 그요소를 한번더 띄어쓰기를 기준으로 나누어 배열에 저장
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(a=> Number(a));
// 제출 시 '/dev/stdin'
//readFileSync로 txt 파일을 읽어와서 toString과 split을 이용하여 배열로 만들어 input으로 저장한 것이기 때문에 나머지는 알아서 
//유동적으로 수정하여 사용하면 됩니다. Number 메소드를 이용하여 숫자로 변경한다던지..
const A = input[0];
var B = 0;
for(let i = 1 ; i < A+1; i ++){
    B += i
}
console.log( B );
