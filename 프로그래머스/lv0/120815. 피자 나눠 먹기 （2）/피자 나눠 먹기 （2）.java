class Solution {
    public int solution(int n) {
        int answer = 1;
            // 반복문 while -할때 까지
            while(true){ // 조건이 트루일때 까지 반복
                if(6 * answer % n == 0) break;
                // 공약수 구하기 -> n 명일때 피자가 answer 판 있어야 나머지가 없는지 구한다.
                answer ++;
                // answer 는 계속 늘어나며 반복하고 n으로 나눴을때 나머지가 0이되면 break한다.
            }
        return answer;
    }
}