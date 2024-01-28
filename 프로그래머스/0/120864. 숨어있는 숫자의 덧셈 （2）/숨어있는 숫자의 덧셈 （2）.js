function solution(my_string) {
    var newMyString = my_string.replace(/[A-z]/g," ").split(' ')
    // replace에 공백을 넣지않아 배열이 아예 사라져버려서 에러가났었음
    // split에 공백을 넣지않아 공백이 하나의 단위로 쪼개어 지지 않아 에러가 났었음
    var result = 0;
    // newMyString 에 정규식을 이용해 영어를 공백으로 바꿔준 뒤에 공백을 기준으로 나누어 줌
        for(let i = 0; i <= newMyString.length; i ++ ){
            if(!isNaN(newMyString[i]))
                result += Number(newMyString[i]);
        }
    return result;
}
