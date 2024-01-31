function solution(my_string) {
    var answer = 0;
    var newarr = my_string.split(' ');
    var cal = Number(newarr[0]) 
    // 주어진 배열을 띄어쓰기를 기준으로 나누어 줌
        for(let i = 0 ; i <=newarr.length; i ++){
            if(newarr[i] === "+"){
            cal += Number(newarr[i+1])
            // 연산자가 + 일 경우에 newarr[0]의 숫자에 다음 값을 더한값을 cal에누적
            }else if(newarr[i] === "-"){
            cal -= Number(newarr[i+1])
            }   // 아닐시에 두값을 빼줌
        }
       
    return cal;
}