const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let [A,B] = input
var arr = []
for(let i = 1; i <= A; i++){
    if(A % i == 0){
        arr.push(i)
        
    }
}
if(arr[B-1] == undefined){
    console.log(0)
}else{
    console.log(arr[B-1])
}
