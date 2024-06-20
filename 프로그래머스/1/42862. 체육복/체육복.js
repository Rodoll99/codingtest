function solution(n, lost, reserve) {

		// 여벌없이 분실한 학생
    let realLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
		// 분실없이 여벌이 있는 학생
    let realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
    
		// 체육복을 빌릴 수 있는 학생 수
    let answer = n - realLost.length;

    for (let i = 0; i < realLost.length; i++) {
        let lostNum = realLost[i];
      
        for (let j = 0; j < realReserve.length; j++) {
            let reserveNum = realReserve[j];
            if (reserveNum === lostNum - 1 || reserveNum === lostNum + 1) {
              answer += 1;
              realReserve[j] = -1; 
              break; 
            }
        }
      }

    return answer;
}