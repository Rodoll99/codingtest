function solution(strlist) {
    var answer = [];
        for(let i= 0; i < strlist.length ; i ++){
            //i 가 strlist 의 길이보다 작아질때까지 반복
            answer.push(strlist[i].length);
            //answer 배열에 strlist의 i번째 index의 길이를 추가
        }
    return answer;
}