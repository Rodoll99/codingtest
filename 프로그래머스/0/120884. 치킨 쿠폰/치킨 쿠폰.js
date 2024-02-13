function solution(chicken) {
    var answer = 0;
    //while은 조건문이 true일때에 반복해서 실행함 , 때문에 치킨이 열마리일떄까지만 실행하게됨 
    while(chicken >= 10){
        // floor -> 소수점 이하 버림 / 치킨의 갯수를 10으로 나눠주어 쿠폰으로 먹을수있는 치킨의 갯수를 파악하여 answer 에 담음
        answer += Math.floor(chicken /10);
        //치킨을 열개로 나누어 쿠폰이 나오는 양 + 쿠폰으로 주문할수있는 양으로 치킨의 값을 지정하여 치킺ㄴ이 치킨이 10마리 아래로떨어질때까지 반복
        chicken = chicken % 10 + Math.floor(chicken /10);
    }
    return answer;
}