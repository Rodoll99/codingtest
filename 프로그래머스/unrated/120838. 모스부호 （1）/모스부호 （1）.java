class Solution {
    public String solution(String letter) {
        String answer = "";
        // morseString 배열에 모스부호를 순서대로 넣어줌
        String[] morseString = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        String [] morse ;
        
        // 공백을 기준으로 편지의 모스부호를 나눠준 뒤 , morse 배열을 넣어줌
        morse = letter.split(" ");
        //편지 해독을 위해 morse 값과 moreList 값이 일치하는 index를 찾아
        //'a' 를 더해줌
        for(String s : morse){
           for(int i = 0; i < morseString.length; i++){
               if(s.equals(morseString[i])){
                   answer += Character.toString(i + 'a');
               }
           } 
        }
           
        return answer;
    }
}