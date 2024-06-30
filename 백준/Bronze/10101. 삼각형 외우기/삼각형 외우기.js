const fs = require("fs");

// 예제.txt 파일을 읽어와서 배열로 변환
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

// 유효한 숫자만 남기고 빈 줄이나 잘못된 입력 제거
input = input.filter(num => !isNaN(num) && num > 0);

// 세 변의 길이를 정렬
input = input.sort((a, b) => a - b);

// 삼각형의 세 변의 합이 180도인지 확인
if (input.length === 3 && input.reduce((a, b) => a + b) === 180) {
    if (input[0] === input[1] && input[1] === input[2]) {
        console.log("Equilateral");
    } else if (input[0] === input[1] || input[1] === input[2]) {
        console.log("Isosceles");
    } else {
        console.log("Scalene");
    }
} else {
    console.log("Error");
}
