const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
var arr = input[0].split(" ").map(item => Number(item));

var uniq = [...new Set([...arr])];
var object = {};

uniq.sort(function(a, b){
    return b-a;
})

for(let i=0; i<uniq.length; i++){
    object[uniq[i]] = uniq.length - i - 1;
}

var str = "";

arr.forEach((item) => {
    str += object[item] + " ";
});
console.log(str);