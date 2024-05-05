let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// 문제 ->
// 첫째 줄에 다음 세 가지 중 하나를 출력한다.
// A가 B보다 큰 경우에는 '>'를 출력한다.
// A가 B보다 작은 경우에는 '<'를 출력한다.
// A와 B가 같은 경우에는 '=='를 출력한다.

const A = Number(input[0]);
const B = Number(input[1]);
if( A > B ){
    console.log(">")
}
else if( A < B ){
    console.log("<")
}
else if( A == B ){
    console.log("==")
}

