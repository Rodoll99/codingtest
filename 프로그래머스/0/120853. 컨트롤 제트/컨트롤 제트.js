function solution(s) {
    // Z가 붙어있다면 이전의 요소를 지우고 더한 값을 리턴
    var answer = 0;
    var news = s.split(' ');
    //news 배열에 s문자열을 띄어쓰기 기준으로 나누어준 배열을 할당시켜줌
        while(news.includes('Z')){
            //news 배열에 Z가 존재하는 동안 반복
            //for문을 사용하니 한번 실행이 되고 다시 반복되지않고 한개의 Z만 삭제 되었었음
            news.splice(news.indexOf('Z')-1 , 2);
            //news의 'Z'요소의 인덱스의 -1 부터 2개를 지워줌 (ctrl+z한 값과 z)
            
        }
    return news.reduce((a,b) => a+Number(b) , 0);
    // reduce -> 배열의 내용을 하나로 축약할때에 사용하는 함수!
    // a -> 누적 값 , b -> 현재 요소  , 초기값
    // => news 배열을 순회하며 a는 Number(b)의 합을 도출함
}