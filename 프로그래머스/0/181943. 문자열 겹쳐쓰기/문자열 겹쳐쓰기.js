function solution(my_string, overwrite_string, s) {
    //전개연산
    const myStr = [...my_string]
    //인덱스 2부터 overwrite_string 의길이까지 overwrite_string 을 추가
    myStr.splice(s, overwrite_string.length, overwrite_string)
    //문자열로 변환한 값을 리턴
    return myStr.join("")
}