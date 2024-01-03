function solution(n, t) {
    // t의 n제곱 구하기
    
    var answer = 0;
        for(i = 1 ; i <= t ; i ++){
            //경과한 시간(t)만큼 반복
           answer = n *= 2;
            //경과한 시간만큼 세균의 갯수를 제곱해줌
        }
    return answer;
}