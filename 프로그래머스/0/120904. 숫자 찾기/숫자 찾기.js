function solution(num, k) {
    return String(num).indexOf(k)+1 || -1;
    //num 을 문자열로 바꿔주고 , k의 인덱스 번호를 찾아 1을 더해줌(인덱스번호는 0부터 시작하기 때문)
    //만약 없다면 -1 리턴
}