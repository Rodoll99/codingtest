function solution(arr, n) {
    //arr의 길이가 짝수일때에
    if(arr.length % 2 == 0){
        //a의 인덱스가 2로 나누어 지지않는다면(홀수라면) 해당 요소에 a+n을 해주고 아니라면 a리턴
        return arr.map((a , i)=> i%2 !== 0? a+n : a )
    } else{
          return arr.map((a , i)=> i%2 === 0? a+n : a )
    }

}