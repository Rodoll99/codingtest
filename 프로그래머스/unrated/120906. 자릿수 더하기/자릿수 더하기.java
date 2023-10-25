class Solution {
    public int solution(int n) {
        int answer = 0;
       
        while(n>0){
            answer += n % 10;
            //현재 n의 일의 자리 숫자를 n % 10을 사용하여 구함
            //그 값을 answer에 더해줌 (answer는 자릿수의 합이 누적)
            
            n /= 10;
            // n을 10으로 나누어 일의 자리 숫자를 제거
            // 다음 자릿수 처리
        }
        return answer;
    }
}