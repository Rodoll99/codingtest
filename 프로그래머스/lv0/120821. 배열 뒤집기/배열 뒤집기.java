class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[num_list.length];
  
        for(int i=0; i<=num_list.length-1; i++){
            //반복문을 이용해 배열의 길이만큼 반복해줌
            answer[i] = num_list[num_list.length-1-i];
            //num[num_list.length - 1] 이 마지막 원소인 이유는 num_list.length 는 길이이고 num[] 안에 들어와야할것은 인덱스값이기때문이다 . 따라서 길이 빼기 1 은 인덱스값 ( 인덱스 값은 0부터 시작하기때문이지만 배열의 길이는 0부터 시작하지않기 때문 )
            //answer 배열의 마지막 위치부터 Num_list 배열의 첫번째 값을 담아주는 것
            
        } 
        return answer;
    }
}