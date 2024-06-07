function solution(myString, pat) {
    var answer = 0;
    var arr = []
        for(let i = 0; i < myString.length; i++){
            if( myString[i] == "A"){
                arr.push("B")
            }else{
                arr.push("A")
            }
        }
        console.log(arr)
    return arr.join("").includes(pat) ? 1 : 0;
}