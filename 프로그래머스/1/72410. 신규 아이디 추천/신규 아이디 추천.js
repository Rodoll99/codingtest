function solution(new_id) {
    
    //소문자로 변경
    let lower = new_id.toLowerCase()
    //array.match() => 괄호안의 조건만 찾아내어 배열로 반환
    //반환 후 문자열로 만듬
    let level2 = lower.match(/[a-z0-9-_.]/g).join('')
    // // -> 정규 표현식 패턴, \. -> .을 나타냄 ,+-> 하나이상 반복되는것을 뜻함 , g-> 전역 검색  == 하나이상 반복된 . 을 전역으로 검색해 .로 변경
    let level3 = level2.replace(/\.+/g,'.')
    //^ -> 시작부분에서의 점 or(|) $ -> 끝부분에서의 점을 공백으로 변경
    let level4 = level3.replace(/^\.|\.$/g,'')
    // 그렇게 만들어진 문자열의 길이가 0일 경우에 a로 변환 , 아니라면 그대로 반환
    let level5 = level4.length === 0 ? 'a' : level4
    // 15번째 문자까지 잘라내고 마지막이 점으로 끝난다면 공백으로 변환
    let level6 = level5;
    if (level5.length >= 16){
        level6 = level5.slice(0,15).replace(/\.$/g,'') 
    }
    // 길이가 2보다 작다면 마지막 문자열을 한번더 반복
    if (level5.length <= 2){
        let small = [...level5].pop().repeat(3-level5.length)
        level6 += small
        console.log(small)
    }

    return level6;
}