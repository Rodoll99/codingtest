function solution(x) {
    var num = [...String(x)].map(a=>Number(a)).reduce((a,b)=> a+b);
    return x % num === 0 ? true : false
}