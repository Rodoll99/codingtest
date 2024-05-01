function solution(intStrs, k, s, l) {
    var answer = [];
    var str = [];
    for(let i = 0 ; i < intStrs.length; i ++){
         str.push([...intStrs[i]].splice(s , l))
        if(Number(str[i].join('')) > k){
            answer.push(Number(str[i].join('')))
        }

        }
       return answer;
    }
    
    
 
