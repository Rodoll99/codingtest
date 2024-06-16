function solution(N, stages) {
    let fail = [];
    let num2 = stages.length
    
    //1부터 N까지 반복
    for(let i = 1; i <= N; i++){
        //각 스테이지를 클리어한 사람들의 수를 구함
        let num = stages.filter(v=> v === i).length;
        //fail 에 스테이지의 단계와 , 실패율을 push함
        fail.push([i,num/num2]);
        //클리어한 사람의 수를 빼주고 계산
        num2 = num2 - num
    }
    //fail을 실패율을 기준으로 정렬해주고
    const answer = fail.sort((a,b)=>b[1]-a[1]);
    //스테이지만 남기도록 각 배열마다의 index0을 구함
    return answer.map(v=>v[0]);
}