function solution(numbers) {
    var answer = [];
    var arr = [1,2,3,4,5,6,7,8,9,0]
    return arr.filter((a,b) => !numbers.includes(a)).reduce((a,b) => a+b);
    }
