const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let N = parseInt(input);

let limit = 1,
  n = 1;

while (limit < N) {
  limit += n + 1;
  n++;
}

const a = n - (limit - N);

if (n % 2 === 0) {
  console.log(`${a}/${n - a + 1}`);
} else {
  console.log(`${n - a + 1}/${a}`);
}
