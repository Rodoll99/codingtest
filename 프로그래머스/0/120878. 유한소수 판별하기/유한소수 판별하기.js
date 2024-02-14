function solution(a, b) {
    // toFixed(10) -> 10의 자리까지 소수점을 표기함
    // a를 b로 나눈 수가 변환한 값이 같다면 유한소수이므로 1을 리턴, 아니라면 무한소수이므로 2를 리턴해준다.
    //삼항 연산자이용 , Number를 이용해 a/b.toFixed(10)을 숫자로 반환함
    return Number((a/b).toFixed(10)) == a/b ? 1:2;
}