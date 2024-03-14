function solution(s){
    var str = s.toUpperCase()
    var p = 0; 
    var y = 0;
    for(let i =0; i <str.length; i ++){
        if(str[i] == "P"){
            p ++;
        }else if(str[i] == "Y"){
            y ++
        }
    }
    console.log(p,y)
    if(p == y){
        return true;
    }else{
        return false;
    }
}