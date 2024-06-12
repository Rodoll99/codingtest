function solution(k, score) {
    var answer = [];
    var fullScore = [];
    for(let i = 0; i<score.length; i ++){
        fullScore.push(score[i])
        if(fullScore.length <= k ){
            answer.push(Math.min(...fullScore))
        }else if(fullScore.length > k){
           fullScore.sort((a,b) => b-a)
            answer.push(fullScore[k-1])
        }
    }
    return answer;
}