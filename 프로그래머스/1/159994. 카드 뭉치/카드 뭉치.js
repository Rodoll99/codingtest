function solution(cards1, cards2, goal) {
    //cards1과 cards2에 이용할 카드사용순서
    let idx1 = 0;
    let idx2 = 0;
    
    //for문을 돌려 goal 의 요소를 하나씩 확인
    //goal의 길이는 cards1의 길이 + cards2의 길이
    for(let word of goal){
        
        // 원하는 카드뭉치에서 카드를 순서대로 한장씩 사용
        // 현재 들어온 단어가 cards1에 idx1 순서에 있다면 idx 1증가 후 넘어감
        if(cards1[idx1] === word) idx1 ++;
        
        //cards1에 없다면 cards2에서 확인
        //현재순서해있으면 idx2 1증가 시키고 넘어감
        else if(cards2[idx2] ===word) idx2 ++;
        
        // cards1과 cards2의 순서에 단어가 다르다면
        // 문장을 만들 수 없으므로 No를 반환.
        else return "No"
    }
    
    //for문을 통과했으면 문장을 만든것이므로 Yes반환
    return "Yes";
}