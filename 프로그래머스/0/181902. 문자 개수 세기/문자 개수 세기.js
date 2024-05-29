function solution(my_string) {
    var answer = [];
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
    answer = Array(52).fill(0)
    for(let i = 0; i < my_string.length; i++){
        for(let j = 0; j < alpha.length; j ++){
            let idx = 0;
              if(my_string[i] == alpha[j]){
                   idx = alpha.indexOf(alpha[j])
                answer[idx] += 1
              }
        }
      
    }
    return answer;
}