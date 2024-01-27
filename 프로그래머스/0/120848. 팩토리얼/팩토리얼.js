function solution(n) {
    let ans = 1;

    for(let i = 1; i <= n; i++){
        ans *= i;
        //n만큼 i를반복하며 answer에 i를 곱해줌
        if(ans === n){
            return i;
        }
        
        if(ans > n){
            return i - 1;
        }
    }
}