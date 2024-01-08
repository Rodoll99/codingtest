function solution(numbers) {
    var answer = 0;
        numbers.sort(function(a, b)  {
        if(a < b) return 1;
        if(a > b) return -1;
        });
        //배열을 내림차순으로 정렬하여 제일큰 원소 두개가 맨 앞에 오게해줌
        return numbers[0] * numbers[1];
        //인덱스 번호를 이용해 두개를 곱한 값을 리턴
}