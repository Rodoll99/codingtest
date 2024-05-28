const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map( a=> a.split(" ").map(Number));
const N = input[0][0]
var arr = input[1]
var cnt = 0;
for(let i = 0; i < N; i++){
    let newArr = []
    for(let j = 1; j <= arr[i]; j++ ){
        if(arr[i] % j ==0)
        newArr.push(arr);
    }
    if(newArr.length == 2){
        cnt ++;
    }
}
console.log(cnt)


