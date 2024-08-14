let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(a => a.split(" ").map(Number));
let N = input.shift()[0];  // N을 추출, input.shift()는 배열을 반환하므로 [0]으로 첫 요소를 가져옴

let line = input[0];  // 줄에 있는 숫자들
let inLine = [];
let stack = [];
let i = 1;  // 우리가 기대하는 다음 숫자

for (let x of line) {
    // 현재 숫자가 우리가 기대하는 숫자와 같으면 inLine에 추가하고 다음 숫자로 진행
    if (x === i) {
        inLine.push(x);
        i++;
    } else {
        // 그렇지 않으면 스택에 푸시
        stack.push(x);
    }

    // 스택에서 inLine으로 옮길 수 있는 숫자들을 옮김
    while (stack.length > 0 && stack[stack.length - 1] === i) {
        inLine.push(stack.pop());
        i++;
    }
}

// 마지막에 모든 숫자가 올바르게 정렬되었는지 확인
if (inLine.length === N) {
    console.log("Nice");
} else {
    console.log("Sad");
}
