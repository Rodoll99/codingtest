function solution(balls, share) {
  let factorial = [BigInt(1)];
    //BigInt => 정수의 길이에 상관없이 큰 수를 다룰 수 있게 해줌
    //BigInt(1) 을 factorial 변수에 할당함 
  for (let i = 1; i <= balls; i++) {
      //공의 길이만큼 반복하며
		factorial[i] = factorial[i - 1] * BigInt(i);
      // factorial의 i번째 인덱스는 bigInt의i라는 숫자와 factorial의 i-1번째 값과 곱한 값
	}
  return factorial[balls] / (factorial[balls - share] * factorial[share]);
    //Hint의 공식을 이용해 리턴값 적용
}