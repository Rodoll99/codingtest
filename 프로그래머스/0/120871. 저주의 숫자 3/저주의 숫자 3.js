function solution(n) {
    var answer = 0;
    let arr = [];
    let i = 0;
    while(true){
        i++
       
        if(!i.toString().split("").includes("3")){
            if(i % 3 !== 0){
         arr.push(i)
        console.log(arr )
        }else if(i % 3 ==0){
            answer ++
            console.log(answer)
            continue;
        }
        if(arr.length == n ){
            break;
            }
        }
    }
         
    
    return arr[arr.length - 1];
}