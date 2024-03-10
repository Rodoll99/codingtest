function solution(arr, idx) {
    
    //idx부터 시작
        for(let i = idx ; i<arr.length; i ++){
            // 반복하며 arr[i] 가 1일때에 v 리턴하고 없다면 idx보다 큰 값중 1이없다는 뜻이므로 -1 리턴
            const v = arr[i]
            if(v === 1)
                return i
        }
    return -1;
}