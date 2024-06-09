function solution(board) {
  let answer = 0;
	
    // 폭발반경 x , y 지정
  const dangerArea = [
		[-1, 0], [1, 0], [0, 1], [0, -1], [-1, 1], [1, 1], [1, -1], [-1, -1]
	]; 
	
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        //지뢰가 설치된곳을 확인
      if (board[i][j] == 1) {
          //dangerArea를 map
        dangerArea.map((v) => {
            //dagerArea에 폭탄이 발견된 위치를 더해줌 (폭발반경 지정)
          let [x, y] = v;
          [x, y] = [x + i, y + j];
            //x나 y의 위치가 맵 밖을 나갈수도 있으므로 맵 밖으로 폭발반경이 넘어간다면 0으로 지정
          if (
            x >= 0 &&
            x < board.length &&
            y >= 0 &&
            y < board[i].length &&
            board[x][y] == 0
          )
            board[x][y] = 2;
        });
      }
    }
  }
    // 만약 board의 칸이 0이라면 answer 는 ++ 
  board.map(v1 => v1.map(v2 => v2 == 0 ? answer++ : 0));
  return answer;
}