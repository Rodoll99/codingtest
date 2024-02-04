// function solution(sides) {
//     var answer = [];
//     var sideNum1 = Number(sides[0]) - Number(sides[1]) + 1;
//     var sideNum2 = Number(sides[0]) + Number(sides[1]) - 1;
//     var sideNum3 = Number(sides[1]) - Number(sides[0]) + 1;
//     var sideNum4 = Number(sides[1]) + Number(sides[0]) - 1;
//     var sideArr = [];
//         if(sides[0] > sides[1]){
//             for(let i = sideNum1 ; i <= sideNum2; i++){
//                 sideArr.push(i);
//             }
//         }else if(sides[0] < sides[1]){
//             for(let i = sideNum3 ; i <= sideNum4; i++){
//                 sideArr.push(i);
//             }
//         }
//     return sideArr.length;
// } 테스트 1,2,7 에러
function solution(sides) {
    let count = 0
    const max = Math.max(...sides)
    //side배열의 가장 큰 값
    const min = Math.min(...sides)
    //side 배열의 가장 작은값
    
    // 만약 기존 요소 중 가장 긴 변이 있다면
    for(let i = max-min+1 ; i <= max ; i ++) {
        // i => 가장큰값 - 가장작은값 +1 , i는 가장큰값까지 증가하며
        count++
        //count를 함
    }
    // 나머지 한 변이 가장 긴 변인 경우
    for(let i = max+1 ; i < max+min ; i ++) {
        //i는 가장큰값의 +1 , i는 가장큰값과 가장 작은값을 더한 만큼 증가
        count++
    }
    return count
}
