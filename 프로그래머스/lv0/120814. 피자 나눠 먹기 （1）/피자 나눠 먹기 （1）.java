class Solution {
    public int solution(int n) {
        int answer = 0;
            if( n % 7 == 0 ){
                answer = n / 7 ;
            } else {
                answer = n / 7 + 1 ;
            }
        return answer;
        // 최소 한조각씩 먹어야 하기 때문에 7로 나눴을떄에 나눠지지 않는다면 피자를 한판 더 추가하면 됨
    }
}