let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(a => a.split(" ").map(Number));
input.shift(); // 첫 번째 줄 제거

input.sort((a, b) => {
    if (a[0] !== b[0]) {
        return a[0] - b[0];
    } else {
        return a[1] - b[1];
    }
});
for(let i =0 ;i < input.length ; i++){
    console.log(input[i].join(" "))
}