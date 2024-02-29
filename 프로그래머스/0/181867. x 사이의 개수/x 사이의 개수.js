function solution(myString) {
    // x를 공백으로 바꾸고, 각 배열의 길이를 배열형식으로 리턴
  
    return myString.split("x").map(a => a.length);
}