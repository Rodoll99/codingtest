function solution(babbling) {
    // babbling 을 맵핑함, 할수있는 말을 replace로 공백으로 변경하여 줌 , 
    // 모두 바꾸기 위해 정규식을 이용함 replaceAll(/aya|woo|ma|ye/gi,"")
    // 필터를 이용해서 공백의 문자열만 남겨줌
    // 그 배열의 길이를 리턴하여 머쓱이가 한 옹알이의 횟수를 카운트
     return babbling.map(ong => ong.replaceAll(/aya|woo|ma|ye/gi,"")).filter(a=> a === "").length
    
}