class Solution {
    public double solution(int[] numbers) {
        double answer = 0;
        //int[] numbers; 이미 선언되어있음
        float sum = 0;  // 더한값 선언
        
        for (int i = 0 ; i < numbers.length; i ++){
            // i 는 numbers 배열의 길이 만큼 계속 증가한다.
            sum += numbers[i]; 
            // sum 은 numbers 배열의 i 를 다 더한 값 
        }
        answer = sum / (numbers.length) ;
        // 평균 값은 배열의 합을 배열의 길이만큼 나누어주면 된다.
        return answer;
    }
}