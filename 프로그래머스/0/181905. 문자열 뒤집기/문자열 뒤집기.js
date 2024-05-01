function solution(my_string, s, e) {
    var answer = '';
    var str = [...my_string].slice(s , e+1).reverse().join('')
    answer += my_string.slice(0,s) + str + my_string.slice(e+1)
    console.log(str)
    return answer;
}