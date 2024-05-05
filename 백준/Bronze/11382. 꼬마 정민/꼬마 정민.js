const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
//첫번째 줄에 공백을 두고 값이 주어지므로 split(" ") , 숫자로 바꿔주어야 하므로 맵핑을 이용해 요소를 숫자로 바꾸어줌
const input = fs.readFileSync(file).toString().trim().split(" ").map(x => Number(x));

console.log(input[0] + input[1] + input[2])