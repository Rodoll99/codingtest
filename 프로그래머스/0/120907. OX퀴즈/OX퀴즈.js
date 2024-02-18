function solution(quiz) {
    //quiz배열을 map을 이용해 등호를 == 로 바꿔주어 연산이 가능케해줌
  const mapped = quiz.map((v) => v.replace("=", "=="));
    // map을 이용 ,eval함수를 이용해 계산을 할수있게 해줌 , 만약 식이 참일 시에 각요소를 O로 변환 해주고 거짓일시 X로 변환시켜줌 
  return mapped.map((v) => eval(v) ? "O" : "X");
}