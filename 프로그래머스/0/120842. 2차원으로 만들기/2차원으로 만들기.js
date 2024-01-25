function solution(num_list, n) {
    const answer = [];

    while(num_list.length) {
        //num_list 의 길이까지
        answer.push(num_list.splice(0, n));
        // num_list를 splice 메서드 를이용해잘라내어 answer배열에 추가
        // splice(자르기 시작할 인덱스 , 몇개를 자를지 )
        
    }

    return answer;
}
