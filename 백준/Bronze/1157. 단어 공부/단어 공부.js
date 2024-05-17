const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().toUpperCase().split('');

let arr =[];
//arr2 에 26길이의 배열을 0으로 채움
let arr2 = Array(26).fill(0);
// 아스키 코드를 이용 , A의 아스키코드 부터 Z의 아스키코드까지 반복하며 i 는 증가함
for(let i='A'.charCodeAt();i<='Z'.charCodeAt();i++){
    //arr에 i의 아스키코드를 이용해 해당하는 알파벳을 추가한다.
    arr.push(String.fromCharCode(i));
}
// input.length 만큼 반복
for(let i =0; i<input.length;i++){
    arr2[arr.indexOf(input[i])]++;
}
let cnt =0;
const maxNum = Math.max.apply(null,arr2);
arr2.indexOf(maxNum) == arr2.lastIndexOf(maxNum) ? console.log(arr[arr2.indexOf(maxNum)]) : console.log("?");