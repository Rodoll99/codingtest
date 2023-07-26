class Solution {
    public int solution(int n) {
        int answer = 0;
            for(int i=0; i <= n ; i++){
                // 반복문을 이용해 주어진 정수n 까지 계속 증가시킴
                if(i % 2 == 0){
                    // i가 2로 나누었을 때 0이라면(짝 수라면)
                    answer += i;
                    //i를 더한값을 리턴해줌
                }
            }
        return answer;
    }
}