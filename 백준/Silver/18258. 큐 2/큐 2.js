let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(a => a.split(" "));
let N = input.shift()[0];

let que = [];
let ans = [];
let front = 0;  // 큐의 앞을 추적하는 인덱스

for(let x of input) {
    switch(x[0]) {
        case 'push':
            que.push(x[1]);
            break;
        case 'pop':
            if (que.length === front) {
                ans.push(-1);
            } else {
                ans.push(que[front]);
                front++;
            }
            break;
        case 'size':
            ans.push(que.length - front);
            break;
        case 'empty':
            ans.push(que.length === front ? 1 : 0);
            break;
        case 'front':
            if (que.length === front) {
                ans.push(-1);
            } else {
                ans.push(que[front]);
            }
            break;
        case 'back':
            if (que.length === front) {
                ans.push(-1);
            } else {
                ans.push(que[que.length - 1]);
            }
            break;
    }
}

console.log(ans.join("\n"));
