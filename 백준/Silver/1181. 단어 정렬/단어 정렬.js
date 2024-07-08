let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
input.shift(); // 첫 번째 줄 제거

input.sort((a,b)=> {
    if(a.length !== b.length){
        return a.length - b.length;
    }else{
        //사전순 정리
        return a.localeCompare(b)
    }
})
var set = new Set(input)
console.log([...set].join("\n"))