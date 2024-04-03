function solution(numbers) {
    //numbers를 문자열로 변환시킴
    var answer = numbers.map((v) => v+"")
    //문자열 b+a를 조합한값을 숫자로 변환 , a+b를 조합한값을 숫자로 변환
    //그 중 더 큰값을 기준으로 정렬 후 다시 문자열로 변환
    .sort((a,b) => (b+a) * 1 - (a+b) * 1).join("");
    //만약 answer의 첫번째 요소가 0이라면 0을 반환하고 , 아니라면 answer 를 반환
    //0으로만 이루어져있다면 0000000 - 을 반환 하기 때문
    return answer[0] === "0" ? "0" : answer;
}