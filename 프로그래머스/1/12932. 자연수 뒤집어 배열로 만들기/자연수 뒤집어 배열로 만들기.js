function solution(n) {
    // n을 string타입으로 바꾸고 그걸하나로 쪼개줌
    // reverse() -> 문자열을 역순으로 반환 해주는 함수
    // .map 을 이용하여 안에 있는데이터를 문자열에서 숫자로 반환시켜줌
    return String(n).split("").reverse().map((data) => Number(data))
}