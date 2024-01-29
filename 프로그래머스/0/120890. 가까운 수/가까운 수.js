function solution(array, n) {
    var answer = 0;
    var result = [];
    
    array.sort((a,b)=> a-b);
    //내림차순 정렬
        for(let i = 0 ; i<array.length; i ++){
           result.push(Math.abs(n-array[i]));
            // Math.abs 를 이용해 절댓값으로 만든
            // n-array[i] 가 가장 차이가 작은 수 = n과 제일 가까운 수
            var a = Math.min(...result);
            // a에 Math.min 을 이용해 result에서 제일 작은 값을 할당시킴
        } 
    return array[result.indexOf(a)];
    // array 의 result 배열의 a번째 인덱스를 적용시킴
}