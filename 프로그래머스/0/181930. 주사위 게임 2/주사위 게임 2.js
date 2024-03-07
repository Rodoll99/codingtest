function solution(a, b, c) {
    var answer = 0;
        if(a === b && a ===c && b === c){
           return (a+b+c)*((a*a)+(b*b)+(c*c))*(Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3))
        }else if(a === b || a === c || b === c){
            return (a+b+c)*((a*a)+(b*b)+(c*c))
        }else if(a !== b && a!==c && b!== c){
            return a+b+c ;
        }
    return answer;
}