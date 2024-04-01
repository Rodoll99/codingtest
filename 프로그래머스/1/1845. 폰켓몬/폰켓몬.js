function solution(nums) {
    //중복되는 수를 제거
    //입출력 예 1 ) 3 , 1 , 2
    var answer = [...new Set(nums)];
    
    //nums의 길이를 반으로 나눈값을 limit로 할당 , 만약 중복된 수를 제거 한 길이가
    //limit 보다 크다면 답은 limit , 아니라면 answer 의 길이
    var limit = nums.length/2 ;
    return answer.length > limit? limit: answer.length;
}