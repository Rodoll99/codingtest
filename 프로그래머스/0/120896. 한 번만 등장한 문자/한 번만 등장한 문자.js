  function solution(s) {
    // 배열에서 하나만 있는 문자열을 찾고
    // 그 배열을 정렬함
    // 한번만 등장하는 문자가 없을시에 빈 문자열 리턴
    let res = [];
    // res 배열 생성
    for (let c of s){
        // for (const element of array) 으로 사용가능
        // s 배열의 c(item)을 반복해서 수행
          if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
            // s배열의 c번째 인덱스가 s배열의 마지막인덱스와 같으면 res 배열에 push
            // s배열의 c번째 인덱스와 마지막인덱스가 같을 경우는 배열내에 같은요소가
            // 하나일 때에만 가능함 , 그 경우에 res배열에 추가
        }
    return res.sort().join('');
      // res를 정렬하고 join을 이용해 문자열로 만들고 리턴
}
