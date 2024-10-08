let fs = require("fs");

// 입력 파일 읽어오기
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const N = parseInt(input.shift()); // 첫 번째 줄에서 N 값 추출

// 1. 평균값 구하기 (소수점 이하 반올림)
let numbers = input.map(Number); // 문자열을 숫자로 변환
let answer1 = Math.round(numbers.reduce((a, b) => a + b) / N);

if(answer1 == -0){
    console.log(0)
}else{
    console.log(answer1);
}


// 2. 중앙값 구하기 (오름차순 정렬 후 중간 값 출력)
let sortedNumbers = numbers.slice().sort((a, b) => a - b); // 오름차순 정렬
let answer2 = sortedNumbers[Math.floor(N / 2)];
console.log(answer2);

// 3. 최빈값 구하기
let map = new Map();
for (let num of numbers) {
    map.set(num, (map.get(num) || 0) + 1); // 각 숫자의 빈도수 계산
}

// 최빈값 찾기
let maxValue = Math.max(...map.values()); // 가장 높은 빈도수
let maxKeys = [...map.entries()]
    .filter(([key, value]) => value === maxValue) // 최빈값인 항목들 필터링
    .map(([key]) => key)
    .sort((a, b) => a - b); // 오름차순 정렬

// 최빈값이 여러 개일 경우 두 번째로 작은 값 출력, 하나면 그 값 그대로 출력
let answer3 = (maxKeys.length > 1) ? maxKeys[1] : maxKeys[0];
console.log(answer3);

// 4. 범위 구하기 (최대값 - 최소값)
let maxNum = Math.max(...numbers);
let minNum = Math.min(...numbers);
console.log(maxNum - minNum);
