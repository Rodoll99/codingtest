function solution(my_string, is_prefix) {
    var answer = 0;
    var arr = []
    for(let i = 1; i <= my_string.length; i ++){
        arr.push(my_string.slice(0,i))
    }
    return arr.includes(is_prefix) ? 1 : 0;
}