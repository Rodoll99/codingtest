function solution(s, n) {
    //아스키코드를 이용해 밀린 값만큼 값을 수정해준다.
    //아스키코드 : A = 65 / Z = 90 / a = 97 / z = 122
    var answer = '';
    for (let i = 0 ; i <  s.length; i ++){
        if (s[i] === " ") {
            answer += " "
        }
        else{
            //s 변수 내에 있는 i의 charCode를 표시해줌
            let charCode = s.charCodeAt(i);
            console.log(charCode)
            // charCode가 대문자일때에 변경후에 90보다 크다면 -26을 해주어 Z였다면 다시 A로 갈수있게 만들어줌
            if(charCode <= 90){
                charCode += n;
                if(charCode > 90){
                    charCode -= 26; 
                }
            }
            else{
                //반복
                charCode += n;
                if(charCode > 122){
                    charCode -= 26
                }
            }console.log(charCode)
            //String.fromCharCode()->아스키코드값을 문자로 변환해줌
            answer += String.fromCharCode(charCode);
        }
    }
    return answer;
}