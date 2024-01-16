function solution(rsp) {
    var answer = [];
    
        for(let i = 0; i < rsp.length ; i ++ ){
            if (rsp[i] == 2 ){
                answer.push(0); 
            }else if(rsp[i] == 0){
                answer.push(5);
            }else{
                answer.push(2);
            }
        }// rsp 의 길이만큼 순회, 2일경우 answer배열에 0을 추가하고
         // 5일경우 2를 , 0일경우에는 2를 추가.
    return answer.join('');
    //배열을 문자열로 초기화시키기
}