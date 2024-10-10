let fs = require("fs");

// 입력 파일 읽어오기 및 초기화
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number); // N과 M을 숫자로 변환

// 길이가 M 이상인 문자열만 필터링
input = input.filter(a => a.length >= M);

// 문자열의 빈도수를 저장할 Map
let map = new Map();

// 문자열의 빈도수 계산
for (let i = 0; i < input.length; i++) {
    if (map.has(input[i])) {
        map.set(input[i], map.get(input[i]) + 1);
    } else {
        map.set(input[i], 1);
    }
}

// 정렬: 우선 빈도순, 그다음 길이순, 마지막으로 사전순으로 정렬
map = [...map].sort(function(a, b) {
    if (a[1] === b[1]) {
        if (a[0].length === b[0].length) {
            // 문자열 사전순 비교
            return a[0].localeCompare(b[0]);
        } else {
            // 길이가 긴 문자열이 우선
            return b[0].length - a[0].length;
        }
    } else {
        // 빈도수가 높은 것이 우선
        return b[1] - a[1];
    }
});

// 정렬된 결과에서 문자열만 추출하여 출력
let answer = map.map(a => a[0]);
console.log(answer.join("\n"));
