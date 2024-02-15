function solution(A, B) {
    let arr = [...A]
    // arr에 [...A] 를 할당  
    for(let i = 0; i< arr.length; i++){
        //arr의 길이만큼 반복
        if(A === B)
            // A 랑 B 가 만약 같다면
            return i;
            // i를 반환함
        else{
            arr.unshift(arr.pop())
            if(arr.join('') === B)
                return i+1;
            //unshift -> 새로운 요소를 배열의 맨 앞쪽에 추가 후 새로운 길이를 반환
            //pop -> 배열의 마지막 요소를 제거
            //만약 arr.join('') (arr을 문자열로 변환한 값)이 B와 같다면
            // i+1  을 리턴.
        }
    }
    return -1;
    // 둘다아니라면 -1을 리턴
}