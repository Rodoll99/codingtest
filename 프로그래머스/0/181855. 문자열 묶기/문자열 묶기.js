function solution(strArr) {
    // 객체 생성 (키와 밸류값으로 이루어져있음)
    var obj = {};
    // 문자열 내에서 가장 긴 길이의 수를 구함
    var max_length = Math.max(...strArr.map(a=> a.length))
        // 그만큼 반복하며 len에 strArr 요소의 길이가 i와 같은 만큼의 수를 할당
        // 그러면 len 에는 같은 문자열의길이의 요소가 저장이됨
        for(let i = 0; i <= max_length;  i++ ){
            const len = strArr.filter( a => a.length == i );
            obj[i] = len.length;
            
        }
        console.log(obj)
    return Math.max(...Object.values(obj))
}