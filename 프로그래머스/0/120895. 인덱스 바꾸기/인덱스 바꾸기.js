function solution(my_string, num1, num2) {
    const result = [...my_string]
    // num 간의 문자열을 변환함
    result.splice(num1, 1, my_string[num2])
    //인덱스 num1 부터 1개를 제거하고 거기에 my_string의 num2번째 인덱스번호를 넣겠다. 
    result.splice(num2, 1, my_string[num1])
    //인덱스 num2 부터 1개를 제거하고 거기에 my_string 의 num1번째 인덱스 번호를 넣겠다.
    return result.join("")
    // 배열을 문자열로 변환
}