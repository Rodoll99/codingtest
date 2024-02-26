function solution(myString) {
    // var answer = '';
    //     for(let i=0; i< myString.length; i++){
    //         // 소문자 a를 대문자로 바꾸는 경우
    //         if(myString[i] === "a"){
    //             answer += myString[i].toUpperCase();
    //         // A가 아닌 대문자를 소문자로 바꾸는 경우
    //         }else if(myString[i] === myString[i].toUpperCase()){
    //             answer += myString[i].toLowerCase();
    //         // 해당이 없을 시 그상태로 추가
    //         }else {
    //             answer += myString[i];
    //         }
    //     }
    // return answer;
    
    //복잡하게 할 것 없이 그냥 다 소문자로 변경해주고 , a를 A로 변경해주면 됐다... 언제쯤 난 이런머리가 돌아갈까 흑흑흑
    myString = myString.toLowerCase();
    return myString.replaceAll("a","A");
    
}