class Solution {
    public String solution(String my_string) {
        String answer = "";
        char[] str = my_string.toCharArray();
        // my_string 의 길이를 str이라는 이름의 배열로 만들어줌
        
        char[] reverse = new char[str.length];
        // 문자 배열 revers 는 str의 길이만큼 지정함
        for (int i = 0; i < str.length; i++) {
            reverse[i] = str[str.length - i - 1];
            // 배열을 뒤집는 식
        }

        answer = new String(reverse);

        return answer;
    }
}