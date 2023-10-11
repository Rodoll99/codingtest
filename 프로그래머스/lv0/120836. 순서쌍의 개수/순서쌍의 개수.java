class Solution {
    public int solution(int n) {
        int answer = 0;
        
        for(int i=1; i<=n; i++){ // 반복문 이요해서 i의 값을 n이 될때까지 늘려줌
            if(n%i==0){ // n 이 i로 나누어질 때 까지
                answer ++ ; 
            }
        }
        return answer;
    }
}