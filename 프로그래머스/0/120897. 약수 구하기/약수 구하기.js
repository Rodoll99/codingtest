function solution(n) {
    var answer = [];
    let num = 1;
        while(num <= n){
            //1부터 n의 수로 갈때 까지
              if( n % num === 0){
              // n이 num으로 나누었을때 0으로 나누어진다면
            answer.push(num);
            // answer배열에 num을 추가
        }
        num ++
        //num은 계속 커짐
    }
    return answer;
}