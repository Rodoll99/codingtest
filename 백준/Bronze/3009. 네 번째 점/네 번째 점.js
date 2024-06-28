const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n").map(a=> a.split(" "));
var W = [];
var H = [];
let x
let y
for(let i = 0 ; i < input.length; i++){
    W.push(input[i][0])
    H.push(input[i][1])
}
W = W.sort();
H = H.sort();
//두번째 요소가 처음과 같은가? 맞다면 마지막 요소가 다른 한 요소이므로 마지막요소 리턴 , 아니라면 처음것 리턴
x = W[1] === W[0]? W[2] :W[0];
y = H[1] === H[0]? H[2] :H[0];
console.log(`${x} ${y}`);
