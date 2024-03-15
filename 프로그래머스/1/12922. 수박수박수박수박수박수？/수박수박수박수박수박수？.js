function solution(n) {
    var answer = '수';
        for(let i = 0; i <= n-2 ; i ++){
            if(answer[i] ==="수")
            answer += "박"
            if(answer[i] === "박"){
                answer += "수"
            }
        }
    return answer;
}