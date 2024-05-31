function solution(arr, queries) {
    var answer = [];
    for(let [s,e,k] of queries){
        //v->요소값, i-> 순회하는 인덱스
        //작은것부터 나열해준다음 제일 작은 0번쨰 인덱스를 temp에 넣어줌
        let temp = arr.filter((v,i)=>(i>=s&&i<=e&&v>k)).sort((a,b)=>a-b)[0];
        //temp가 존재하면 temp값을 없으면 -1값을 answer에 넣어준다. 
        answer.push(temp?temp:-1)
    }
return answer
}