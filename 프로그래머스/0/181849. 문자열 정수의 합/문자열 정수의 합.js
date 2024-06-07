function solution(num_str) {
    return num_str.split("").reduce((a,i) => Number(a)+Number(i));
}