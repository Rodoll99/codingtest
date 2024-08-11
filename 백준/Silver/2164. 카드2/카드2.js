let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let N = Number(input[0])
let arr = Array.from({ length: N }, (_, i) => i + 1);
let idx = 0;
while(arr.length - idx > 1){
    idx ++;
    arr.push(arr[idx])
    idx ++;
}
console.log(arr[idx])
