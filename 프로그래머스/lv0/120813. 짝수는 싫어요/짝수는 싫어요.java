import java.util.Arrays;
class Solution {
    public int[] solution(int n) {
        int i1 = 0;
       int[] answer;
        
        if(n % 2 ==0){
            answer = new int[n/2];
                // 배열이 n나누기 2 인 int값 배열을 만들어줌 
        }else{
            answer = new int[n/2 +1]; 
            //홀수인 경우 +1을 해줘서 짝수로 만들어줌
        }
    for(int i=0; i <= n; i++){
        if(i % 2 == 1){
            answer[i1] = i;
            i1 ++;
        }
        
    }
   Arrays.sort(answer);
            return answer;
        
    }
}