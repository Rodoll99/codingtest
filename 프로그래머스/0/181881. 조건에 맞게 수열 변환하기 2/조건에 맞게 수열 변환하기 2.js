function solution(arr) {
    let idx = 0
    let prevArr = arr
    
    //무한루프를 시작함(true일때에 계속 반복하므로)
    while(true) {
        // 현재 배열을 조건에 맞게 변환
        const changeCurArr = prevArr.map(a => {
            if(a >= 50 && a%2 === 0) return a/2
            if(a < 50 && a%2 === 1) return a*2+1
            return a
        })
        console.log(changeCurArr)
        // 이전의 모든 배열과 현재 모든 배열의 요소 비교
        //array.every() -> 모든 요소를 비교해서 값이 같을때에 true를 반환함
        const isAllSame = prevArr.every((a, i) => a === changeCurArr[i])
        //isAllSame 이 ture일 경우에 루프를 종료함
        if(isAllSame) break
        idx+=1
        // 현재 배열을 이전 배열 변수에 저장함
        prevArr = changeCurArr
        
        //루프를 계속 돌면서 changeCurArr에 새로운 값을 할당시켜 줌으로써 따로 정해길이가 정해져있지 않은 상황이나 , 그 길이를 찾아야하는 경우에 while문 사용
     
    }
    
    return idx
}