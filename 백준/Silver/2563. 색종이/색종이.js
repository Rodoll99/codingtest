let [TC, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
input = input.map((i) => i.split(" "));
// 100 , 100의 2차원 배열을 만듬
const arr = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;

//종이의 갯수만큼
for (let i = 0; i < TC; i++){
    //X의 시작부분을 정해줌
  let startX = +input[i][0]; // 3
    //Y의 시작부분을 정해줌
  let startY = +input[i][1]; // 7


  for (let l = 0; l < 10; l++) {
    for (let m = 0; m < 10; m++) {
        //startX + l 까지가 1일시에 (색종이가 올라가있을경우) 카운트를 세지않고 계속 반복함
      if (arr[startX + l][startY + m] !== 0) {
        continue;
      }//만약 0이라면(색종이가 올라가있지않을시) 해당부분을 1로 바꾸어주면서 count를 증가시킴
      if (arr[startX + l][startY + m] === 0) {
        arr[startX + l][startY + m] = 1;
        count++;
      }
    }
  }
}
console.log(count);