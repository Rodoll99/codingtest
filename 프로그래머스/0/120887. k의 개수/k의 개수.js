const solution = (i, j, k) => {
  // input i, j, k
  let result = 0;
  for (let num = i; num <= j; num++) {
      //i 부터 시작해 j까지 반복함
    const split = String(num).split('');
    // split이라는 변수를 만듬 , 여기에 num을 문자열로 변환하여 자릿수별로 떼어 준 값을 할당
    for (let num2 = 0; num2 < split.length; num2++) {
        //num2는 split변수의 길이만큼 반복하며
      if (split[num2].includes(String(k))) {
          //만약 split 변수의 num2번째 인덱스가 문자열 k를 포함하고있다면
        result++;
          //result는 증가한다
      }
    }
  }
  return result;
}