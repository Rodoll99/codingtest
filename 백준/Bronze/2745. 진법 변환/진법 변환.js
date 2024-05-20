const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(item=>item.split(' '));

function base36ToDecimal(base36Str) {
    const base = Number(input[0][1])
    let decimalValue = 0;
    let power = 0;

    // 입력 문자열을 뒤집어서 가장 낮은 자리부터 처리
    for (let i = base36Str.length - 1; i >= 0; i--) {
        const char = base36Str[i];
        let digitValue;

        if (char >= '0' && char <= '9') {
            digitValue = char.charCodeAt(0) - '0'.charCodeAt(0);
        } else if (char >= 'A' && char <= 'Z') {
            digitValue = char.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
        } else {
            throw new Error('Invalid character in input string');
        }

        decimalValue += digitValue * Math.pow(base, power);
        power++;
    }

    return decimalValue;
}
const result = base36ToDecimal(input[0][0]);
console.log(result);  // 60466175
