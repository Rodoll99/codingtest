function solution(arr, k) {
    var answer = [];
    for(let i=0;i<arr.length;i++){
        if(answer.length === k) return answer;
        if(answer.indexOf(arr[i]) === -1) answer.push(arr[i]);   
    }
    while(answer.length < k){
        answer.push(-1);
    }
    return answer;
}