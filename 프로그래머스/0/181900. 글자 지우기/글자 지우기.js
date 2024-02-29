function solution(my_string, indices) {
    
    //my_string 문자열을 배열로 정의하고 map을통해 현재의 인덱스가 indices의 번호를 포함하고있는지 비교 후 포함한다면 0을리턴 , 아니라면 원래의 값을 리턴
    //filter를 통해 현재의 요소가 0이 아니라면 원래의 값을 리턴하고 0이라면 공백 리턴 후 문자열로 변경
    // * map 함수에서 콜백함수의 두번째 요소는 인덱스번호를 나타낸다 .
    return [...my_string].map((a,b)=> indices.includes(b) ? 0 : a).filter(a=> a !== 0 ? a : "").join('');
}