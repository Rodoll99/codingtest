function solution(n) {
    var num = Math.sqrt(n)
        if(Number.isInteger(num)){
            return (num+1) * (num+1);
        }
    return -1;
}