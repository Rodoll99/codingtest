function solution(myString, pat) {
    var myString = myString.toUpperCase();
    var pat = pat.toUpperCase();
    
    if(myString.includes(pat)){
        return 1;
    }else{
        return 0;
    }
}