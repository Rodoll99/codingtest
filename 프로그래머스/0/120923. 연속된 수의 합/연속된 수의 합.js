function solution(num, total) {
    //Math.ceil -> 반올림
    //ex)연속된 수의 합 공식 => 첫수 + 마지막수 * 갯수 / 2
    const start = Math.ceil((2 * total / num - (num - 1)) / 2);

    let answer = [];

    for (let i = 0; i < num; i++) {
        answer.push(start + i);
    }

    return answer;
}