function solution(babbling) {
    const can = ['aya','ye','woo','ma'];
    let count = 0;
    
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        //같은말이 반복되는것은 카운트 되지않기에 break
        for(let j = 0; j < can.length; j++){
            if(babble.includes(can[j].repeat(2))){
                break;
            }
            babble = babble.split(can[j]).join(" ");
        }
        //나누어 졌을때에 길이가 0이라면 할수있는 옹알이를 다 사용하여 한 말이므로 count +
        if(babble.split(" ").join("").length === 0){
            count += 1;
        }
    }
    
    return count;
}