const fs = require('fs');

// 파일 읽기 및 파싱
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line => line.split(' '));

// 각 줄에서 가장 긴 단어의 길이 찾기
let maxLen = input.reduce((max, line) => {
    return Math.max(max, ...line.map(word => word.length));
}, 0);

input = input.flat();
let str = "";

// maxLen 동안 반복하여 각 단어의 i번째 문자를 가져옴
for (let i = 0; i < maxLen; i++) {
    for (let j = 0; j < input.length; j++) {
        if (input[j][i] !== undefined) {
            str += input[j][i];
        }
    }
}

console.log(str);