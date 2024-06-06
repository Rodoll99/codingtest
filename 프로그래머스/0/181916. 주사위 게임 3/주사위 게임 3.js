function solution(a, b, c, d) {
    const nums = [a, b, c, d];
    const appear = {}
    
    //객체에 각 요소가 몇번이나 들어가있는지 함수를 짬
    for(let i =0;i<4;i++){
        const num = nums[i];
        appear[num] = (appear[num] || 0) + 1;
    }

    //객체 중 밸류가 가장 높은수를 count로 지정
    const count = Math.max(...Object.values(appear));
    //밸류의 값에 따라 정렬
    const entries = Object.entries(appear).sort((a,b)=>a[1] - b[1])

    let answer = 0;
    switch(count){
        case 4:
            answer = 1111 * a;
            break;
        case 3:
            answer = (10 * Number(entries[1][0]) + Number(entries[0][0])) ** 2
            break;
        case 2:
            //둘다 두개의 페어가 맞춰진 경우 (ex : 1,1 / 2,2 일경우 length = 2 )
            if(entries.length === 2){
                answer = (Number(entries[1][0]) + Number(entries[0][0])) * Math.abs(Number(entries[1][0]) - Number(entries[0][0]))
            }
            //2개만 서로 갖고 나머지는 다 다른 경우
            if(entries.length === 3){
                //밸류가 1인것만 찾아 newEntries로 할당
                const newEntries = entries.filter((el)=> el[1]===1)
                answer = Number(newEntries[1][0]) * Number(newEntries[0][0])
            }
            break;
            //밸류가 1씩이라면 다 다른수이므로 제일 작은 수 반환
        case 1:
            answer = Math.min(...nums);
            break;
    }   
    return answer;
}