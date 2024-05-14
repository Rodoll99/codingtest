function solution(todo_list, finished) {
    var answer = [];
    for(let i = 0 ; i < todo_list.length; i++){
          let [a,b] = [todo_list[i] , finished[i]]
          if( b == false ){
              answer.push(a)
          }
    }
    return answer;
}