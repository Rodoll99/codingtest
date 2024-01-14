function solution(my_string) {
    let sum = 0;
    for (let i = 0; i < my_string.length; i++) {
        if (isNaN(my_string[i]) === false) {
        //isNaN => 숫자일 시에 false를 반환함
        //my_string의 i 번째 인덱스가 false 일시에(숫자 일시에)
            sum += Number(my_string[i])
        // sum이라는 변수에 Number() 함수를 이용해서 문자열을 숫자로 만들어준 값을 더해서 저장함
        } 
    } return sum
}