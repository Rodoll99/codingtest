class Solution {
    public int[] solution(int[] numbers, int num1, int num2) {
        int[] answer = new int[num2 - num1 + 1];
        // 배열의 길이를 선언해줌 (길이는 두번째 정수에서 첫번째 정수를 뺀 값의 +1(인덱스 값))
        
        for(int i = num1 , j=0; i <= num2 ; i++){
            //int i는 첫번째 주어진 정수 , j = 0; i는 두번째 정수까지 늘어남
            answer[j] = numbers[i];
            j++;
        }
        return answer;
    }
    //answer = Arrays.copyOfRange(numbers , num1 , num2 + 1) 
    //Arrays.copyOfRange(배열명,from,to+1) 기능을 활용한 방법
    //인덱스 3 까지 출력하고싶다면 4를 입력(3입력시 인덱스3을 포함하지않음)
    //넘버즈 배열에서 num1 에서부터 num2 까지 복사함
}