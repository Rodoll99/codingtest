function solution(lottos, win_nums) {
    var matchNum = [];
    var unknownNum = [];
    for(let i = 0; i<lottos.length; i++){
        for(let j = 0; j < win_nums.length; j ++){
            if(lottos[i] == win_nums[j]){
                matchNum.push(lottos[i])
            }
        }
        if(lottos[i] == 0){
            unknownNum.push(lottos[i])
        }
    }
    var min = matchNum.length
    var max = matchNum.length + unknownNum.length
    
    var a = 0;
    switch(max) {
        case 1:
            a = 6;
            break;
        case 2:
            a = 5;
            break;
        case 3:
            a = 4;
            break;
        case 4:
            a = 3;
            break;
        case 5:
            a = 2;
            break;
        case 6:
            a = 1;
            break;
        default:
            a = 6; // 1 ~ 6 범위 외의 값에 대한 기본값 설정 (로또 규칙에 따라 조정)
            break;
    }
    var b = 0;
       switch(min) {
        case 1:
            b = 6;
            break;
        case 2:
            b = 5;
            break;
        case 3:
            b = 4;
            break;
        case 4:
            b = 3;
            break;
        case 5:
            b = 2;
            break;
        case 6:
            b = 1;
            break;
        default:
            b = 6; // 1 ~ 6 범위 외의 값에 대한 기본값 설정 (로또 규칙에 따라 조정)
            break;
    }
    return [a,b];
}