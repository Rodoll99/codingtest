function solution(a, b, n) {
    var answer = 0;
    
    while(n>=a){
        // 주어진 빈병의 갯수와 교환가능한 병의 갯수를 나누어 주고 그 값만큼 b를 곱해주면 받을 수 있는 콜라의 갯수를 구할 수 있다.
        answer += Math.floor(n/a) * b
        // 받을수있는 콜라의 갯수와 n%a 를 더해주면 빈병의 갯수까지 포함해서 다시계산 가능하다.
        n = Math.floor(n/a) *b + n%a
    }
    return answer;
}