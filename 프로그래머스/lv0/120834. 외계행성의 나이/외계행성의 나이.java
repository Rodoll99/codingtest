class Solution {
    public String solution(int age) {
        String answer = "";
        String ageStr = String.valueOf(age); // int 'age'를 문자열로 변환해 ageStr에 저장 
        String[] ageArr = ageStr.split("");
        
        for(int i=0; i < ageArr.length; i++){
            answer += ((char)((Integer.parseInt(ageArr[i])+97)));
            //아스키 코드 이용
            //ageArr에 저장된 문자를 정수로 변환
        }
        return answer;
    }
}