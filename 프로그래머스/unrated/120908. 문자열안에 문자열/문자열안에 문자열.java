class Solution {
    public int solution(String str1, String str2) {
        int answer = 0;
        
        if(str1.contains(str2)){ // x.contains(y)-> x안에 y가 포함되는지 확인하는 함수
            answer=1;
        } else {
            answer=2;
        }
        return answer;
    }
}