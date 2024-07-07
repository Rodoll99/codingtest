let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();
var N = Number(input)

let num = 666;
let cnt = 1;
while( cnt !== N ){
    //num은 cnt가 N이 되기 전까지 계속 증가함
    num++;
    //만약 문자열 num에 666이 존재한다면 cnt는 증가함
    if(String(num).includes("666")) cnt ++
}
console.log(num)