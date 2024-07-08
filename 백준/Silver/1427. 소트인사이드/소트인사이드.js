let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("");
console.log(input.map(Number).sort((a,b)=> b-a).join(""))