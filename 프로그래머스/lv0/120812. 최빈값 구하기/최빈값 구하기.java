class Solution {
    public int solution(int[] array) {
        int answer = array[0];
        int max = 0; 
        int arr[] = new int[1000]; // 최대 원소값 지정
        
        for(int i = 0; i < array.length; i++) {
            arr[array[i]]++;
            
            if(max < arr[array[i]]) {
                max = arr[array[i]];
                answer = array[i];
            }
        }
        
        int temp = 0; 
        for(int j = 0; j < 1000; j++) {
            if(max == arr[j]) temp++;
            if(temp > 1) answer = -1;
        } //최빈값이 여러개인지 확인하고 여러개일시 -1 리턴
        
        return answer;
    }
}