function solution(d, budget) {
    //오름차순으로 정렬하면 작은수부터 정렬이됨
    d.sort((a,b)=> a-b);
    //정렬된 d배열에서 두 항목을 합했을때에 예산보다 크다면 d의 끝원소를 삭제함
    while(d.reduce((a,b)=> (a+b) , 0 ) > budget){
        d.pop();
    }
    console.log(d)
    //d의 길이를 리턴
    return d.length;
}