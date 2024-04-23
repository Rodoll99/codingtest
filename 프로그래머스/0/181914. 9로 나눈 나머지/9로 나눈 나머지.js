function solution(number) {
    return [...number].reduce((a,b) => Number(a)+Number(b)) % 9
    

}