function solution(num_list, n) {
    return num_list.filter((a,b) => b+1>=n);
}