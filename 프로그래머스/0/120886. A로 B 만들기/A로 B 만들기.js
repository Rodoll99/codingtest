function solution(before, after) {
    const bearr = [...before];
    const afarr = [...after];
    // 스프레드 연산자를 통해 문자열을 배열로 형변환
    afarr.sort();
    bearr.sort();
    // 두배열을 정렬해줌 

    if(afarr.toString() === bearr.toString()){
        // 그냥 배열만 비교하면 내용이 같더라도 다른 주솟값을 가지고있기때문에 false를 출력함
        // toString으로 형변환을 해주어 값을 비교해줌
        return 1
    }else{
        return 0
    }
}