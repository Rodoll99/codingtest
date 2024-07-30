let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
input.shift();
let stack = [];
const result = [];
input.forEach((line) => {
    // 입력
    //line의 길이가 1이 아니라면( 즉 입력값이 여러개라면 ) 띄어쓰기를 기준으로 나누어준다.
    //Number로 맵핑하고 stack에 추가한다.   
    if(line.length !== 1) {
        const target = line.split(" ")[1]
        const targetNum = Number(target)
        stack.push(targetNum)
    //입력값이 한개라면 
    } else {
        const num = Number(line)
        //입력값이 2라면 stack의 길이가 있을때에(stack에 정수가 존재할때에) 
        if(num === 2) {
            if(stack.length) {
                //stack에서의 뒷쪽에있는값을 결과값에 추가한다.
                result.push(stack.pop())
                //아니라면 result에 -1을 추가한다.
            } else {
                result.push(-1)
            }
        //3이라면 stack의 길이를 result에 추가한다.
        } else if(num === 3) {
            result.push(stack.length)
        //4라면 stack에 정수가 존재할때에 0을 추가한다.
        } else if(num === 4) {
            if(stack.length) { 
                result.push(0)
            //아니라면 1을 추가한다.
            } else {
                result.push(1)
            }
            //5라면 정수가 존재할때에 stack에서 맨마지막 요소를 result에 추가한다.
        } else if(num === 5) {
            if(stack.length) {
                result.push(stack.at(-1))
                //아닐시에는 -1 을 추가한다.
            } else {
                result.push(-1)
            }
        }
    }
})

console.log(result.join("\n"))