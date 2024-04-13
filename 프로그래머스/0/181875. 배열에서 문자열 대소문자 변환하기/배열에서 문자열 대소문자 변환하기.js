function solution(strArr) {
        return strArr.map((a,b)=> b % 2 == 0? a.toLowerCase() :a.toUpperCase())    
}