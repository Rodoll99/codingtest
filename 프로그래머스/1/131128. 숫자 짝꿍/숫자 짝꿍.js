function solution(X, Y) {
    let answer = '';
    let num = [];

    // 문자열 X와 Y를 배열로 변환하고 정렬
    X = X.split("").sort((a, b) => a - b);
    Y = Y.split("").sort((a, b) => a - b);

    // 숫자의 빈도를 저장할 맵
    let xCount = new Map();
    let yCount = new Map();

    // X의 각 숫자의 빈도 계산
    for (let x of X) {
        xCount.set(x, (xCount.get(x) || 0) + 1);
    }

    // Y의 각 숫자의 빈도 계산
    for (let y of Y) {
        yCount.set(y, (yCount.get(y) || 0) + 1);
    }

    // 공통으로 나타나는 숫자의 최소 빈도를 찾아 num 배열에 추가
    for (let [key, value] of xCount) {
        if (yCount.has(key)) {
            let minCount = Math.min(value, yCount.get(key));
            for (let i = 0; i < minCount; i++) {
                num.push(key);
            }
        }
    }

    if (num.length == 0) {
        return "-1";
    } else if (num.every(n => n == '0')) {
        return "0";
    } else {
        return num.sort((a, b) => b - a).join("");
    }
}
