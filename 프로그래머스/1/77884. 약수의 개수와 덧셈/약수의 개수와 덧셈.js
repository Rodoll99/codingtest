function solution(left, right) {
    let arr = [];
    let arrLength = [];
    let leftRight = [];
    let answer = 0;
    //정수를 반복문을 이용해 leftRight 배열에 추가
    for (let i=left; i<=right; i++){
        leftRight.push(i)
        // i % j 가 0이라면(약수라면) arr에 i를 추가
        for (let j=1; j<=i; j++) {
            i % j == 0 && arr.push(i)
        }
        arrLength.push(arr.filter(item => i===item).length)
    }
    
    for (let z = 0; z < arrLength.length; z++){
        arrLength[z] % 2 === 0 ? answer += leftRight[z] : answer -= leftRight[z]
        console.log(answer)
    }
    
    return answer;
    
}