function solution(myString) {
    var answer = '';
    var nonStr = ["a","b","c","d","e","f","g","h","i","j","k"]
    var newArr = [...myString]
        for(let i = 0; i < newArr.length; i ++){
            //nonStr이 newArr[i]에 포함이 되는지
            if(nonStr.includes(newArr[i])){
                //replace(newArr[i] , "l")
                // 에러 -> 문자열에서만 사용가능하기때문에
                newArr[i] = "l"
            }
        }
    return newArr.join('');
}