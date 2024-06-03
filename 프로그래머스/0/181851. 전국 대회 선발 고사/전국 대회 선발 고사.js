function solution(rank, attendance) {
    var answer = 0;
    var arr = [];
    var newArr = [];
    for(let i =0; i < rank.length; i++){
        var [a,b] = [rank[i],attendance[i]]
        console.log(a,b)
        if(b){
            arr.push(a)
            arr.sort((a,b) => a-b)
        }
    }
    for(let i = 0; i < arr.length; i ++){
        newArr.push(rank.indexOf(arr[i]))
    }
    newArr.splice(3)
    
    return (10000 * newArr[0]) +(100 * newArr[1]) + newArr[2]
}