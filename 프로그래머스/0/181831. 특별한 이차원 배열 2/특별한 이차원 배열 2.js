function solution(arr) {
    var answer = 0;
    var newArr = [];
        for(let i = 0; i < arr.length; i++){
            for(let j = 0 ; j < arr[i].length; j++)
               newArr.push([arr[i][j] ,arr[j][i]])
        }
    for(let i = 0; i < newArr .length; i ++){
            if(newArr[i][0] == newArr[i][1]){
                answer = 1;
            }else{
                return 0;
            }
      
    }
    return answer;
}