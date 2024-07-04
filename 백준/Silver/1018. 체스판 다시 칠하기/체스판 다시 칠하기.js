let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//첫번째 요소를 size로 저장 , 나머지요소를 전개 연산자를 이용해 ...arr로 나누어줌
let [size, ...arr] = input;
//첫번째 요소를 띄어쓰기를 기준으로 둘로 나누어 row , col로 저장
let [row, col] = size.split(" ");

//한 줄마다 하나씩 끊어 배열로 저장
arr = arr.map((i) => i.split(""));
const answer = [];

//하얀색이 먼저 시작하는 판
const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

//검은색이 먼저 시작하는 판
const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

//하얀색이 먼저 시작하는 판과 비교하여 다르다면 count
function whiteFirst(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== white[i][j]) count++;
    }
  }
  return count;
}

//검은색이 먼저 시작하는 판과 비교하여 다르다면 count
function blackFirst(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== black[i][j]) count++;
    }
  }
  return count;
}

//전체 판을 움직이는 형태로 작성했기에, -7을 해줌으로써 전체 판을 벗어나지 않게 해준다.
for (let j = 0; j < row - 7; j++) {
  for (let k = 0; k < col - 7; k++) {
    answer.push(whiteFirst(j, k));
    answer.push(blackFirst(j, k));
  }
}
console.log(Math.min(...answer));
