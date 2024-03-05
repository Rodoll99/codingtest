function solution(arr, query) {
    //반복문을통해 query 순회
    for(let i = 0 ; i < query.length ; i ++) {
        const cur = query[i]
        
        //짝수라면
        if(i%2 === 0) {
            //배열에서 cur + 1 의 값부터 배열의 길이 - cur + 1의 값만큼 자른다.
            arr.splice(cur+1, arr.length -(cur+1))
        } else {
            //홀수라면 배열의 첫번째에서 cur 만큼 자른다
             arr.splice(0, cur)
        }
    }
    
    return arr
}