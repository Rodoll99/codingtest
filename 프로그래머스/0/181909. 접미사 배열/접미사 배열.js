function solution(my_string) {
    var strArr = my_string.split("").reverse().join("");
    var reverse = [];
    for (let i = 1 ; i < strArr.length+1; i++){
        reverse.push(strArr.slice( 0 , i ))
    }
    return reverse.map(a=> a.split("").reverse().join("")).sort();
}