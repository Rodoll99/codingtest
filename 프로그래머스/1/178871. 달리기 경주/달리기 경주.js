function solution(players, callings) {
    // playerMap 객체 생성 (플레이어의 이름을 배열 인덱스로 매핑)
   const playerMap = {};
    
    for(let i=0; i <players.length; i ++){
        //player 배열을 순회하며 각 플레이어의 이름을 해당플레이어의 배열 인덱스로 
        //매핑하며 playerMap 에 저장
        playerMap[players[i]] = i;
    }
    for (let i = 0; i <callings.length; i ++){
        //calling 순회
        const idx = playerMap[callings[i]];
        //현재 calling 의 인덱스를 'playerMap'에서 가져옴
        const temp = players[idx-1];
        // 원소를 교환하기전 이전인덱스의 값을 temp에 저장함
        players[idx-1] = callings[i];
    
        players[idx] = temp;
        // 현재의 인덱스와 이전인덱스의 원소를 서로 교환

        playerMap[callings[i]] = idx - 1;
        playerMap[temp] = idx;
        // playerMap 에서 호출된 플레이어와 이전위치에 있던플레이어의
        // 인덱스를 갱신
    }
    return players;
  
}
