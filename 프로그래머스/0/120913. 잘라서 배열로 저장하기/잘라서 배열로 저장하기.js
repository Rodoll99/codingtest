function solution(my_str, n) {
    var newArr = [...my_str];
    // my_str문자열을 배열로 만든 변수를 할당
    var newmy_str = [];
        
        while(newArr.length !== 0){
            //newArr의 길이가 남아있을때에는 계속 반복
            newmy_str.push(newArr.slice(0,n).join(''));
            //새 배열에 my_str 의 0번째 인덱스부터 n까지의 배열을 합쳐 push
            newArr.splice(0,n);
            // push 한 배열의 요소를 제거 후 다시 반복
        }
    return newmy_str;
}