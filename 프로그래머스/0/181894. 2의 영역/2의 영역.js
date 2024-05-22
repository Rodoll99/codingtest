function solution(arr) {
    var answer = [];
    var A = arr.indexOf(2)
    var B = arr.lastIndexOf(2)
    if(!arr.includes(2)){
        return [-1];
    }
    return arr.slice(A,B+1).map(Number);
}