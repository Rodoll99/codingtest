function solution(n) {
    var answer = new Set();
    // Set은 중복된 요소를 제거하는 특성을 가지고 있음
        for(let i = 2; i <= n ; i ++){
            // i = 2부터 시작하며 n까지 반복하며 1씩 커짐
            while(n % i=== 0) {
                answer.add(i);
                //Set에 요소를 추가하는 add();
                n = n / i;
            }
        }
    return [...answer];
}