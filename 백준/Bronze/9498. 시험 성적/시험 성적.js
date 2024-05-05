
let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = Number(input[0]);

//스위치문의 조건이 트루일때에
switch (true) {
    // case 조건문을 통해 값 설정 후 조건이 참이면 실행
    // break를 통해 조건에 맞는 값을 찾았을 때에 실행 중지
    case A >= 90 && A <= 100:
        console.log("A");
        break;
    case A >= 80 && A < 90:
        console.log("B");
        break;
    case A >= 70 && A < 80:
        console.log("C");
        break;
    case A >= 60 && A < 70:
        console.log("D");
        break;
    default:
        console.log("F");
}