const input = require("fs").readFileSync("/dev/stdin").toString();

const result = [];

//아스키코드 이용 String.fromCharCode(x) -> x에 해당하는 아스키 코드를 반환 
for (let i = 97; i <= 122; i++) {
    // 해당하는 숫자가 없을시 -1 을 반환함
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));