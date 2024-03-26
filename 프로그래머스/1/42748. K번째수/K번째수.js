function solution(array, commands) {
    var answer = [];
    for (var i = 0; i < commands.length; i++){
        // 자른배열을 따로 할당시켜줌
        let selectedArray = array.slice(commands[i][0] - 1, commands[i][1]);
        //오름차순으로 정렬
        selectedArray.sort((a,b)=>a-b);
        
        //그 배열의 [i][2]-1 의 인덱스를 가진 숫자를 push
        answer.push(selectedArray[commands[i][2] - 1]);
        console.log(selectedArray);
    }
    return answer;
}