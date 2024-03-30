function solution(numbers) {
    var answer = [];
        for(let i = 0; i <numbers.length; i ++){
            for(let j = i+1; j<numbers.length; j ++){
                 answer.push(numbers[i]+numbers[j])   
            }
        }
    //중복값 제거
    answer = [...new Set(answer)]
    //오름차순 정렬
    return answer.sort((a,b) => a-b);
}