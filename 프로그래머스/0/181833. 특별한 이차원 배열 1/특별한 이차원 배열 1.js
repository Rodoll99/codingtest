function solution(n) {
    // Array(n) -> n의 길이만큼 배열을 생성하고
    // fill(x) -> 그것을 x로 채움
    // Array(n).fill(0) --> 위와 같음
    var arr = Array(n).fill(Array(n).fill(0));
    
    //a에 한번더 함수를 넣음 , a2가 i와 i2가 같은 경우에 1을 채우고 아니라면 0을 채움
    return arr.map((a,i) => {
        return a.map((a2,i2) => a2 = i == i2 ? 1 : 0);
    });
}