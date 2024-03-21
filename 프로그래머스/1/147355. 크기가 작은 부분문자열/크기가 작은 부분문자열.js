function solution(t, p) {
    var answer = 0;
    //p를 숫자로 바꾸어줌
    var pNum = Number(p)
        for(let i = 0; i < t.length - p.length + 1; i ++){
            // i 부터 i+p의 길이만큼 잘라내주어 숫자로 변환
            const slicedT = Number(t.slice( i , i + p.length));
            // 만약 자른값이 p보다 작거나 같다면 ansswer 는 증가
            if(slicedT <= pNum ){
                answer += 1;
            }
        }
        
    return answer;
}