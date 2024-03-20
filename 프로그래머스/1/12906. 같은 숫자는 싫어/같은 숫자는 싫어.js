function solution(arr)
{
 // filter를 이용한 풀이
return arr.filter((val,index) => val != arr[index+1]);
}