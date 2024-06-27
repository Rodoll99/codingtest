function solution(survey, choices) {
    //여러 타입들을 객체에 저장
  const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let answer = "";
  for (let i = 0; i < choices.length; i++) {
      //ex) survey[i] : "RT" -> split을 이용해 [R,T] 으로 만들어줌 
    const [leftType, rightType] = survey[i].split("");
      //result에 choices[i] 에서 4를 빼주고 절댓값을 씌운값을 할당함
    const result = Math.abs(choices[i] - 4);
      //만약 그값이 4보다 작다면 비동의이기때문에 leftType에 해당하는 key를 찾아 밸류에 result값을 더해줌
    if (choices[i] < 4) {
      // 비동의 -> 왼쪽 요소
      types[leftType] += result;
    } else if (choices[i] > 4) {
      // 동의 -> 오른쪽 원소
      types[rightType] += result;
    }
  }
  const type = Object.keys(types);
     console.log(type)
    //각 항목마다 2개의 선택지중 하나를 택하니 i+=2 를 적용
  for (let i = 0; i < type.length; i += 2) {
     // types[type[i]] -> type[i]라는 키를가진 값의 밸류(왼)
    const leftType = types[type[i]];
     // types[type[i+1]] -> type[i+1](오)
    const rightType = types[type[i + 1]];
    if (leftType >= rightType) {
      // 같거나 클 때는 왼쪽 요소
      answer += type[i];
    } else {
      // 작은 때는 오른쪽 요소
      answer += type[i + 1];
    }
  }
  return answer;
}