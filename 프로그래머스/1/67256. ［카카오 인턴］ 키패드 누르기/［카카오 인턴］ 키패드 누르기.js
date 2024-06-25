function solution(numbers, hand) {
    var answer = '';
    var lp = [1, 4, 7];
    var rp = [3, 6, 9];
    var np = [2, 5, 8, 0];

    var curLp = [3, 0]; // * 위치 (처음 왼손 위치)
    var curRp = [3, 2]; // # 위치 (처음 오른손 위치)
    
    //각 위치를 객체로 저장
    var positions = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };

    for (let x of numbers) {
        if (lp.includes(x)) {
            answer += "L";
            curLp = positions[x];
        } else if (rp.includes(x)) {
            answer += "R";
            curRp = positions[x];
        } else if (np.includes(x)) {
            let pos = positions[x];
         
            let distanceL = Math.abs(pos[0] - curLp[0]) + Math.abs(pos[1] - curLp[1]);
            let distanceR = Math.abs(pos[0] - curRp[0]) + Math.abs(pos[1] - curRp[1]);

            if (distanceL < distanceR) {
                answer += "L";
                curLp = positions[x];
            } else if (distanceL > distanceR) {
                answer += "R";
                curRp = positions[x];
            } else {
                if (hand === "left") {
                    answer += "L";
                    curLp = positions[x];
                } else {
                    answer += "R";
                    curRp = positions[x];
                }
            }
        }
    }
    return answer;
}