function solution(a, b) {
    var answer = 0;
    if(a<b){
        for(let i = a ; a<=b; a++){
            answer += a
        }
    }else if(a>b){
        for(let i = b; b<=a; b++){
                answer += b;
        }
    }else if(a==b){
        return a;
    }
    return answer;
}