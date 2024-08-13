let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let ans = [];

for (let x of input) {
    if (x === ".") {
        break;
    }
    let stack = [];
    let isBalanced = true;
    
    for (let i = 0; i < x.length; i++) {
        if (x[i] === "(" || x[i] === "[") {
            stack.push(x[i]);
        } else if (x[i] === ")") {
            if (stack.length === 0 || stack.pop() !== "(") {
                isBalanced = false;
                break;
            }
        } else if (x[i] === "]") {
            if (stack.length === 0 || stack.pop() !== "[") {
                isBalanced = false;
                break;
            }
        }
    }

    if (isBalanced && stack.length === 0) {
        ans.push("yes");
    } else {
        ans.push("no");
    }
}

// 최종 결과 출력
console.log(ans.join("\n"));
