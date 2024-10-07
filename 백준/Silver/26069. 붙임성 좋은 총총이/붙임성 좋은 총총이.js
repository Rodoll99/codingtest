let fs = require("fs");

let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const N = parseInt(input.shift());

let meetFriends = new Set();
meetFriends.add("ChongChong");  // 'ChongChong'부터 시작

for (let i = 0; i < N; i++) {
    let [a, b] = input[i].split(" ");
    // a 또는 b 중 한 명이라도 meetFriends에 포함되어 있으면, 두 사람 모두 meetFriends에 추가
    if (meetFriends.has(a) || meetFriends.has(b)) {
        meetFriends.add(a);
        meetFriends.add(b);
    }
}

console.log(meetFriends.size);
