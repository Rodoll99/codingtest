function solution(a, b) {
    
    var date = new Date(2016, (a-1) , b);
    //date를 문자열로 변환시키면 출력형식이 변화됨 
    return date.toString().slice(0,3).toUpperCase();
}