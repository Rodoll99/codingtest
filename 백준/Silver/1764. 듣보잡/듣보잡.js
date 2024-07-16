const fs = require("fs");

// 파일 읽기
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 첫 번째 줄에서 nonSee와 nonHear 추출
var [nonSee, nonHear] = input[0].split(" ").map(Number);

// 답을 저장할 배열
let answer = [];

// Map 객체 생성
let map = new Map();

// nonSee 목록 처리
for (let i = 1; i <= nonSee; i++) {
    map.set(input[i], 1);
}

// nonHear 목록 처리
for (let i = nonSee + 1; i < input.length; i++) {
    if (map.has(input[i])) {
        map.set(input[i], map.get(input[i]) + 1);
    }
}

// 교집합 찾기
let arrMap = [...map];
for (let [key, value] of arrMap) {
    if (value === 2) {
        answer.push(key);
    }
}

// 결과 출력
console.log(answer.length);
if (answer.length > 0) {
    console.log(answer.sort().join("\n"));
}
