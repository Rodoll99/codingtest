function solution(arr) {
    var answer = [];
    var stk = [];
    var i = 0;
    while( i < arr.length){
        if(stk.length == 0){ 
        stk.push(arr[i])
        i ++;
        }else if(stk.length !== 0){
            if(stk[stk.length - 1] == arr[i]){
                stk.pop();
                i++;
            }else{
                stk.push(arr[i])
                i++;
            }
        }
    }
    if(stk.length == 0){
        return [-1]
    }
    return stk;
}