// function solution(keyinput, board) {
//     var answer = [0,0];
//     var X = Math.round(board[0]/2);
//     var Y = Math.round(board[1]/2);
//     //X 와 Y의 최댓값을 지정해줌
//         for(let i = 0; i < keyinput.length ; i ++){
//             if(keyinput[i] === "left" && -answer[0] < X){
//                 //최댓값을 넘지않을때에 answer[0]에 -1을 해줌
//                 answer[0] += -1; 
//             }else if(keyinput[i] === "right" && answer[0] < X){
//                 answer[0] += 1; 
//             }else if(keyinput[i] === "up" && answer[1] < X){
//                 answer[1] += 1;
//             }else if(keyinput[i] === "down" && -answer[1] < X) {
//                 answer[1] += -1;
//             }
//         }
//         return answer;
//     }
function solution(keyinput, board) {
  	// 1. x,y 좌표를 선언한다.
    let x = 0;
    let y = 0;
    
  	// 2. board의 범위도 설정한다. 
    const range = 
          [Math.abs( Math.floor(board[0]/2)), 
           Math.abs( Math.floor(board[1]/2))];
    //Math.abs => 절댓값 구하기 / Math.floor => 반올림
    
  	// 3. keyinput에 방향이 입력된다면 그에 맞게 x 또는 y 좌표를 변경한다.
    for(let k of keyinput){
        switch(k){
            case "left": x--; break;
            case "right": x++; break;
            case "down": y--; break;
            case "up": y++; break;
        } 
      	// 4. x와 y의 값이 설정 범위를 넘어간다면 설정된 범위의 최댓값을 대입한다.
        if(Math.abs(x)>range[0]){
            x = x > 0 ? range[0] : range[0] * -1;
            //x 는 x가 0보다 클 경우엔 range의 최댓값(양수) 
            //아니라면 음수
         }
        if(Math.abs(y)>range[1]){
            y = y > 0 ? range[1] : range[1] * -1;
        } //y에도 똑같이 적용
        
    }
    return [x,y];
}