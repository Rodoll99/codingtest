function solution(arr) {
    const arrLength = arr.length;
    //exponent는 계속 늘어남
    let exponent = 0;
    //Math.pow -> 제곱을 구하는 함수 즉 exponent는 계속 1씩 증가하므로 2의 0제곱 1제곱 2제곱 ... 이렇게 늘어나게됨
    //arr의 길이가 2의 x제곱보다 커지거나 같아질때까지 반복
    while(Math.pow(2,exponent) < arrLength) exponent ++;
    
    //거듭제곱의 수를 찾았다면 그 거듭제곱의수와 , arr길이를 뺀 나머지 값 , 즉 0을 몇번이나 더 추가해야하는지 정하고 그 횟수만큼 arr에 0을 추가함
    for( i = 0 ; i < (Math.pow(2,exponent) - arrLength); i ++){
        arr.push(0)
    }
    return arr;
}