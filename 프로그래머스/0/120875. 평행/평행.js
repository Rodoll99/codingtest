function solution(dots) {
    
    //직선이 평행하다는 것은 두 직선의 기울기가 같다는것을 뜻함.
    //직선의 기울기를 구하는 방법은 y값의 변화량 / x값의 변화량이므로 기울기를 계산해서 두 기울기가 같은 결과가 있다면 1 리턴
    
    //모든 경우의 수를 계산해서 입력
    if(calSlope(dots[0] , dots[1]) === calSlope(dots[2] , dots[3]))
        return 1;
    if(calSlope(dots[0] , dots[2]) === calSlope(dots[1] , dots[3]))
        return 1;
    if(calSlope(dots[0] , dots[3]) === calSlope(dots[1] , dots[2]))
        return 1;
    return 0;
    
    //미리 기울기를 계산하는 함수를 만들어 놓기
    function calSlope(arr1, arr2){
        // y값의 증가량에서 x값의 증가량을 나누어줌
        return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0])
    }
}