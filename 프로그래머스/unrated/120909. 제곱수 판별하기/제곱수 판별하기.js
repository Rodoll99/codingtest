function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2;
    // Matg.sqrt() = 제곱근을 구해주는 함수
    // 제곱근을 1로 나눴을때에 나머지가 0인 경우 (제곱수가 아니라면 정수가아닌 
    // 부동소숫점값이 나옴)에는 1을 리턴 , 아니라면 2를 리턴
}
출처: https://oliviakim.tistory.com/46 [ONE LIFE 2 LIVE:티스토리]