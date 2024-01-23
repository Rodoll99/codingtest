function solution(n) {
    var answer = 0;
    for(i=1; i<=n; i++) {
        let counter = 0
        for(j=1; j<=i ; j++) {
            if(i%j == 0) {
                counter += 1
                //카운터라는 변수(=약수)에 숫자를 1 씩 증가 시킴
            }
        }
        if(counter > 2) {
            answer += 1
            //약수가 2를 초과하면 (약수가 3개 이상인 합성수라면)
            //answer에 1을 증가시킴
        }
    }
    return answer
}
