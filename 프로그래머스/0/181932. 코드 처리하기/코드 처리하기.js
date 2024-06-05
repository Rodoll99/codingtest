function solution(code) {
    var ret = "";
    var mode = 0;
    for(let i = 0 ; i < code.length; i ++){
        if(mode == 0){
            if(code[i] == "1"){
                mode = 1;
            }
            else if( i % 2 == 0 ) {
            ret += code[i];
            }
        }else if(mode == 1){
            if(code[i] == "1"){
                mode = 0;
            }
            else if( i % 2 !== 0){
                ret += code[i]
            }
        }
    }
    if(ret.length == 0){
        return "EMPTY"
    }
    return ret;
}