function solution(s) {
    var arr = [...s].sort().reverse();
    return arr.join("");
}