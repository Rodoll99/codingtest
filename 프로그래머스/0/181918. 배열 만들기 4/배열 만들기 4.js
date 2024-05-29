function solution(arr) {
    var stk = [];
    var i = 0;

    while (i < arr.length) {
        if (stk.length === 0) {
            // 스택이 비어있으면 현재 요소를 스택에 추가
            stk.push(arr[i]);
            i += 1;
        } else {
            // 스택의 마지막 요소와 현재 요소 비교
            if (stk[stk.length - 1] < arr[i]) {
                stk.push(arr[i]);
                i += 1;
            } else {
                stk.pop();
            }
        }
    }

    return stk;
}
