let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
var answer = []
var [poketCnt , testCnt] = input[0].split(" ").map(Number);

var poketmons = input.slice(1,poketCnt+1);

var map = new Map();
for(let i = 0 ; i < poketmons.length ; i ++){
    map.set(poketmons[i] , i+1 )
    map.set(String(i+1) , poketmons[i])
}
var test = input.slice(poketCnt + 1, input.length);

for (let i = 0; i < test.length; i++) {
    let item = test[i];
    if (isNaN(Number(item))) {
        // item이 문자열일 경우
        answer.push(map.get(item));
    } else {
        // item이 숫자일 경우
        answer.push(map.get(item));
    }
}
console.log(answer.join("\n"));