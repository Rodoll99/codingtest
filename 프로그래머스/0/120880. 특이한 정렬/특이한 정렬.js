function solution(numlist, n) {
    var answer = [];
    var arr = [];
    var arr2 = [];
    
    // 각 숫자와 n의 차이를 계산하여 arr에 추가
    for(let i = 0; i < numlist.length; i++) {
        arr.push([numlist[i], numlist[i] - n]);
    }
    
    // 차이의 절대값을 계산하여 arr2에 추가
    for (let [a, b] of arr) {
        let [c, d] = [a, Math.abs(b)];
        arr2.push([c, d]);
    }
    
    // arr2를 정렬하는데, 절대값이 같은 경우 숫자 자체를 내림차순으로 정렬
    arr2.sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0];  // 2차 기준: 숫자 자체를 내림차순
        } else {
            return a[1] - b[1];  // 1차 기준: 절대값을 오름차순
        }
    });
    
    // 정렬된 숫자들을 answer 배열에 추가
    for (let [a, b] of arr2) {
        answer.push(a);
    }

    return answer;
}
