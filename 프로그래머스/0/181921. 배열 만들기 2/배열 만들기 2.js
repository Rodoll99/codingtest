function solution(l, r) {
    var answer = [];
    for(let i=l;i<=r;i++){
        //i를 문자열로만들어서
        let arr = String(i)
        //전개연산자를 이용해 한글자씩 떼어 배열화 , every를 이용해 각 요소가 5거나 0이 아니라면 건너띔
        if(![...arr].every(x=>x==='5'||x==='0'))continue;
        answer.push(i)
    }
    return answer.length !== 0 ? answer:[-1];
}
