function solution(numbers, direction) {
    var answer = [];
        if(direction === "right"){
            numbers.unshift(numbers[numbers.length-1]);
            //numbers[numbers.length-1] => 배열의 맨뒤 인덱스의 값
            //unshift => 배열의 맨 앞에 값을 추가
            numbers.pop();
            //pop => 배열의 맨 뒤의 값을 제거
            
        }else{
            numbers.push(numbers[0]);
            //배열의 맨 첫번째 값을 뒤에 추가해주고
            numbers.shift();
            //shift => 배열의 맨 앞의 값을 제거
            
        }
    return numbers;
}