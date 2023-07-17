class Solution {
    public int[] solution(int money) {
        int[] answer = new int[2];
        // int로된 두개 길이의 배열 answer 를 선언
        answer[0] = money / 5500 ;
             // 첫번째 인덱스 '/' 는 나누기 연산자
        answer[1] = money % 5500 ;
             // 두번째 인덱스 '%' 는 나머지 연산자
    
        
        return answer;
    }
}