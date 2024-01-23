function solution(my_string) {
    const arr = [...my_string]
    //my_string 을 스프레드 연산자를 이용해 배열로 변환
        for(let i = 0; i<arr.length; i++){
            if(arr[i] === arr[i].toUpperCase()){
                //만약 arr[i] 가 대문자라면
                arr[i] = arr[i].toLowerCase();
                // arr[i] 를 소문자로 만들어주고
            }
        }
        arr.sort();
        // 배열을 정렬시켜
    
        return arr.join('');
        // 배열을 다시 문자열로 반환 한뒤 리턴
}