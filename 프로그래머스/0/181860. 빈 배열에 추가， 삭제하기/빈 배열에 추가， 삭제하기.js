function solution(arr, flag) {
    var X = [];
    //flag의 길이만큼 실행하며
    for(let i=0; i<flag.length; i++){
        //true 일 시에 실행
        if(flag[i]){
            //arr[i]*2 만큼 반복
            for(let j=0; j<arr[i]*2; j++){
                X.push(arr[i]);
            }
        }else{
            //flase일 시에 arr[i] 만큼 pop 삭제 
            for(let j=0; j<arr[i]; j++){
                X.pop();
            }
        }
    }
    return X;
}