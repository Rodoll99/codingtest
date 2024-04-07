function solution(n, control) {
    var control = control.split("")
    console.log(control )
    for(let i = 0; i < control.length; i ++){
        if(control[i] == "w"){
            n += 1
        }else if(control[i] == "s"){
            n -= 1
        }else if(control[i] == "a"){
            n -= 10
        }else{
            n += 10
        }
    }
    return n;
}