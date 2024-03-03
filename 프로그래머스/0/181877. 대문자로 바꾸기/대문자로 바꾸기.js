function solution(myString) {
    var arr = [...myString]  
    return arr.map(a => a.toLowerCase() ? a.toUpperCase() : a ).join('');
}