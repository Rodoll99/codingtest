function solution(my_string, is_suffix) {
    //endsWith => 특정 값으로 끝나는지를 boolean 값으로 확인해줌
    //my_string 이 is_suffix로 끝나는지 확인하여 참일시 1 리턴 거짓일시 0리턴
    return my_string.endsWith(is_suffix) ? 1 :0 ;
}