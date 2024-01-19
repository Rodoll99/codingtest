function solution(numbers) {
    numbers.sort((a, b) => b - a);
    //배열을 내림차순으로 정렬해줌.
    const firstTwo = numbers[0] * numbers[1]
    // 앞에서부터 두개를 곱한값
    const lastTwo = numbers[numbers.length -1] * numbers[numbers.length - 2];
    // 뒤에서부터 두개를 곱한값(음수두개를 곱했을 경우가 더 큰 상황 고려)
    return firstTwo > lastTwo ? firstTwo : lastTwo;
    // 앞의 두개를 곱한값이 뒤에두개를 곱한값보다 더 클경우에 firstTwo 리턴 , 아니라면 
    // lastTwo 리턴
}