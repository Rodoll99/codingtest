const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)
var a = input[0]
var b = input[1]
var c = input[2]
var d = input[3]
var e = input[4]
var f = input[5]

 for(let x = -999; x < 1000; x ++){
    for(let y = -999; y < 1000; y++){
        if(a*x + b*y == c && d*x + e*y == f){
            console.log(x,y)
        }
    }
 }