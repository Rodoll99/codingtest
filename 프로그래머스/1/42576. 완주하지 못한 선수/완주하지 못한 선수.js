// function solution(participant, completion) {
//     //둘다 정렬을 해줌
//     participant.sort();
//     completion.sort();
//     //반복문을 이용해서 만약 배열의 i번째가 같지않다면 그사람은 완주하지 못한 인원이므로 바로 i번째 참가자 리턴
//     for(var i=0;i<participant.length;i++){
//         if(participant[i] !== completion[i]){
//             return participant[i];
//         }
//     }
// }

// 해시 이용 풀이
function solution(participant, completion) {
    const myMap = new Map();
    
    // 참가자
    for (const person of participant) {
        if (!myMap.has(person)) {
            //person(참가자 배열에있는 한 요소)를 추가하고 1의 밸류값을 지니게 함
            myMap.set(person, 1);
        } else {
            //만약 이미 참가자가 있다면 person이 가지고있는 밸류에 1을 더한다
            myMap.set(person, myMap.get(person) + 1);
        }
    }
    
    //완주자
    for (const person of completion) {
        //만약 map에 넣었던 참가자가 완주자 명단에 있다면
        if (myMap.has(person)) {
            //밸류를 1을 빼준다.
            myMap.set(person, myMap.get(person) - 1);
        }
    }
    
    let answer = '';
    //person은 사람을 , count는 밸류를 뜻함 myMap을 순회하면서
    for (const [person, count] of myMap.entries()) {
        //밸류가 1이거나 넘는다면 그것은 완주를 하지못했다는 의미
        if (count >= 1) {
            answer = person;
            break; // 완주하지 못한 참가자를 찾았으므로 반복문 종료
        }
    }
    
    return answer;
}
