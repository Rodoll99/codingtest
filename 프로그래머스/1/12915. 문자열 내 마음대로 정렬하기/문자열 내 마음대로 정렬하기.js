function solution(strings, n) {
    //sort 매서드 사용
    return strings.sort((a,b) => {
        //만약 비교시 a[n]가 더 크다면 오름차순으로 정렬
        if(a[n] > b[n]){
            return 1;
        //b[n]가 더크다면 내림차순 정렬
        }else if(a[n] < b[n]){
            return -1;
        //a와b가 같다면 사전순으로 정렬
        }else{
           return a>b?1:-1;
        }
    })
}