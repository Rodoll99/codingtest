import java.util.Arrays;
class Solution {
    public int solution(int[] array) {
       
       Arrays.sort(array);
           //sort -> 정렬
            
        
        return array[array.length/2];
        //배열의 길이를 2로 나눈 값
    }
}
