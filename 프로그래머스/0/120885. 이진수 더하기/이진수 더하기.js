function solution(bin1, bin2) {
    //parseInt(bin1 , 2) -> bin1 문자열을 2진법의 정수로 변환
    //bin2도 마찬가지로 적용
    //이것을 더한값을 이진법 문자열로 변환
    return (parseInt(bin1 , 2) + parseInt(bin2 , 2)).toString(2);
    
}