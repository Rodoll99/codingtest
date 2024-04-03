function solution(citations) {
    var answer = 0;
    //내림차순 정렬
    citations.sort((a,b) => b-a);
    
    //인용된 수가 논문수보다 크다면 answer +1 아니라면 반복문을 마침
    for(let i = 0; i <citations.length; i++){
        if(citations[i] > i )
        answer++;
        else break;
    }
    return answer;
}