function solution(n, arr1, arr2) {
    var answer = [];
    //arr 을 만들고 수에 해당하는 1을 만들어 1 또는 2 로만들어줌 , 만약 1 이상이라면 맵을 이용해 공백 또는 # 으로 바꿔준다.
    var toStr1 = [];
    var toStr2 = [];
    var str1 =[];
    var str2 = [];
    var arr = Array(n).fill(0)
    
    for(let i = 0 ; i < arr1.length; i ++){
        let update = arr1[i].toString(2).padStart( n ,'0')
        toStr1.push(update)
    }
    for(let i = 0 ; i < arr2.length; i ++){
        let update = arr2[i].toString(2).padStart( n ,'0')
        toStr2.push(update)
    }
    for(let i = 0; i < toStr1.length; i ++){
        str1.push(toStr1[i].split("").map(a=> a == "1"? a = "#" : " "))

    }
    for(let i = 0; i <toStr2.length; i ++){
        str2.push(toStr2[i].split("").map(a=> a == "1"? a = "#" : " "))
    }
    
    for(let i = 0; i<str1.length; i ++){
        for(let j = 0; j<str1[i].length; j ++){
            if(str1[i][j] == "#" || str2[i][j] == "#" ){
                if(str1[i][j] == "#"){
                    str1[i][j] =="#"
                }else{
                    str1[i][j] += "#"
                }
            }
        }
    }
    for(let i = 0 ; i <str1.length; i++){
        for(let j = 0; j<str1[i].length; j ++){
            str1[i][j] == " #" ? str1[i][j] = "#" : str1[i][j]
        }
        answer.push(str1[i].join(""))
    }
    return answer;
}
