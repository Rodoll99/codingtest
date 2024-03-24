function solution(num_list) {
    var answer = 0;
    for(let i = 0; i<num_list.length; i ++){
        let cacc = num_list[i]
        while( cacc > 1 ){
            if( cacc % 2 == 0){
            cacc /= 2
        }else if( cacc % 2 == 1) {
            cacc = (cacc - 1 )/2;
        }
        answer ++;
        console.log(cacc)
        }
    
    }
    return answer;
}