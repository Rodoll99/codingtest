function solution(num_list) {
    var answer = 0;
    var iArr = '';
    var jArr = '';
    for(let i = 0; i < num_list.length; i ++){
        if(num_list[i] % 2 == 0){
            iArr += num_list[i];
        }else{
            jArr += num_list[i];
        }
    }
    return Number(jArr) + Number(iArr);
}