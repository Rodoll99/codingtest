function solution(arr) {
    var answer = [];
    for(let el of arr){
        if(el >= 50 && el % 2 == 0){
            answer.push(el /= 2)
        }else if(el < 50 && el % 2 !== 0){
            answer.push(el * 2)
        }else{
            answer.push(el)
        }
    }
    return answer;
}