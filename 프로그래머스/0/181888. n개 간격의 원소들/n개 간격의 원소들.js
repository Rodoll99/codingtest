function solution(num_list, n) {
    var answer = [num_list[0]];
    for(let i = n ; i < num_list.length; i += n){
        answer.push(num_list[i])
    }
    return answer;
}