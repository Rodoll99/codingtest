function solution(s, skip, index) {
    // filter 배열을 사용하여 skip에 들어있는 문자를 제거한 배열을 반환 받는다.
    var alpha= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"].filter( v => !skip.includes(v))
    //s 문자열을 하나씩 쪼개어 배열에 담고 map을 이용해 alpha 배열의 a번째 +index로 주어진 숫자와 alpha의 길이를 나눈 나머지를 join함수를 통해 문자열로 다시 변환하여 리턴
    return s.split("").map((a) => alpha[(alpha.indexOf(a) + index) % alpha.length]).join("");
}