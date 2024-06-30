const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(a=>a.split(" ").map(Number))
for(let triangle of input){
    triangle = triangle.sort((a,b)=> a-b);
    if(triangle.reduce((a,b)=> a+b) == 0){
        break;
    }
    if(triangle[0]+triangle[1] >triangle[2]){
        if(triangle[0] == triangle[1] && triangle[1] == triangle[2]){
            console.log("Equilateral")
        }else if(triangle[0] == triangle[1] || triangle[1]==triangle[2]){
            console.log("Isosceles")
        }else{
            console.log("Scalene")
        }
    }else{
        console.log("Invalid")
    }
 
}
