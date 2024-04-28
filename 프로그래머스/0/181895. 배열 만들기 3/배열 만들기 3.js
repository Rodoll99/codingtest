function solution(arr, intervals) {
    
    //변수 할당
   const [[a,b],[c,d]] = intervals
   //slice -> 배열을 복사하여 원본배열을 바꾸지않음
   // , 를 써서 두개의 값을 한번에 리턴 가능함
   return [...arr.slice(a,b+1) , ...arr.slice(c,d+1)];
   
}