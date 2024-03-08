function solution(absolutes, signs) {
    var answer = [];
    for(let i = 0 ; i < signs.length; i ++){
        if(signs[i] === !true){
            absolutes[i] = -absolutes[i]
        }
    }
    return absolutes.reduce((a,b) => a+b);
}