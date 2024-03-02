function solution(a, d, included) {
    var answer = 0;
    var arr = [a];
        
        //arr에 요소를 추가
        for(let i = 1;  i < included.length; i ++){
            arr.push(a += d)  
        }
     // reduce(a,c,i) -> a = 누적된 값 / c = 현재 값 / i = 현재 인덱스
    // arr배열에서 트루라면 누적된 값에 현재의 값을 더하고 아니라면 a를 반환
    return arr.reduce((a,c,i)=> included[i] ? a+c : a , 0);
}