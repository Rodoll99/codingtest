function solution(array) {
    var answer = 0;
    var Stringarr = array.join('').split('');
    //array 를 문자열로 바꾸고 한칸씩 띄워 배열로 저장함
        for(let i = 0 ; i <Stringarr.length; i ++){
            if(Stringarr[i] === "7"){
                //Stringarr의 i번째가 7일경우에 
                answer ++;
                //answer는 1씩 증가 
            }
        }
    return answer;
}