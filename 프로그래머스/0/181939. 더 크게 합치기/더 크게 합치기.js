function solution(a, b) {
    var num1 = Number(String(a) + String(b));
    var num2 = Number(String(b) + String(a))   
    if(num1>num2){
      return num1
    }else{
     return num2
    }
}