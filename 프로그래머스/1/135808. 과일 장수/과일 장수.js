function solution(k, m, score) {
    var answer = 0;
    var appleBox = [];
    
    // 내림차순 정렬
    score.sort((a,b) => b-a);    
    
    // box를 빈배열로 선언
    // box에 사과를 넣음 , 사과를 넣으면서 만약 사과의 갯수가 한상자에 들어갈수있는 최대의 수라면 box를 appleBox에 추가
    // 다시 box는 빈배열로 선언
    for(let i = 0 , box = [] ; i<score.length; i ++){
        box.push(score[i])
        if((i + 1) % m === 0){
            appleBox.push(box);
            box = [];
        }
    }
    //그렇게 만들어진 appleBox는 반복문을통해
    //사과박스에 들어있는 사과의 점수중 가장 낮은숫자와 m을 곱해서 사과박스의 점수를 매기고 모두 합산하여 값을 리턴함
    for(let i = 0; i < appleBox.length; i++){
        answer += Math.min(...appleBox[i]) * m ;
    }
    return answer;
}