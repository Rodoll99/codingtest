function solution(n) {
    var answer = 0;
    var narr = []; 
    //3진법 -> 3으로 나눈수의 나머지숫자를 배열에 추가해줌
    while ( n > 0){
        narr.push(n % 3)
        //그리고 나머지를 뺀 수를 다시 3으로 나눠줌
        n = (n-(n%3))/3
    }
    //parseInt( a, b) => 문자열을 숫자로 바꾸어줌 , 두번째 인자에 n을 넣으면 n진법의 문자열을 10진법으로 바꾸어 반환해줌 
    answer = parseInt(narr.join(""), 3)

    return answer;
}