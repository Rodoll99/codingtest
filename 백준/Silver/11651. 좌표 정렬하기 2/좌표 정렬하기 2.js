let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(a => a.split(" ").map(Number));
input.shift(); // 첫 번째 줄 제거

input.sort((a, b) => {
    if (a[1] !== b[1]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    }
});
console.log(input.map(a => a.join(" ")).join("\n"))