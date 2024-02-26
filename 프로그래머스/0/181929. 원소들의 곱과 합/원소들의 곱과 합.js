function solution(num_list) {
    var answer = 0;
    var numi = num_list.reduce((a,b)=> a * b);
    var numj = num_list.reduce((a,b)=> a + b);
        if(numi > numj * numj){
            return 0;
        }else{
            return 1;
        }
}