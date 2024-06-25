function solution(board, moves) {
    let answer = 0;
    let basket = [];
    
    for (let move of moves) {
        let pickerPosition = move - 1; // 0-based index
        for (let row of board) {
            if (row[pickerPosition] !== 0) {
                basket.push(row[pickerPosition]);
                row[pickerPosition] = 0;
                
                // Check for matching items at the top of the basket
                if (basket.length >= 2 && basket[basket.length - 1] === basket[basket.length - 2]) {
                    basket.pop();
                    basket.pop();
                    answer += 2;
                }
                break;
            }
        }
    }
    
    return answer;
}

// 테스트 실행 예시
console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4])); // 4
