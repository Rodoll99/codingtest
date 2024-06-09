function solution(lines) {
    var answer = 0;

    // 제일 작은 수와 제일 큰 수를 구합니다.
    var min = Math.min(...lines.flat());
    var max = Math.max(...lines.flat());

    // 선분이 위치할 수 있는 최대 길이를 구합니다.
    var len = max - min + 1;

    // 선분이 위치할 수 있는 배열을 생성하고 0으로 초기화합니다.
    var arr = Array(len).fill(0);

    // 각 선분의 시작점과 끝점에 해당하는 배열의 위치에 1을 더합니다.
    for (let i = 0; i < lines.length; i++) {
        var a = lines[i][0] - min; // 시작점 조정
        var b = lines[i][1] - min; // 끝점 조정
        for (let j = a; j < b; j++) {
            arr[j] += 1;
        }
    }

    // 배열의 각 위치에서 2 이상인 구간의 수를 셉니다.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 2) {
            answer++;
        }
    }

    console.log(arr);
    return answer;
}
