  function solution(my_string) {
  let answer = "";
      
  const vowel = ["a", "e", "i", "o", "u"];
      // 제거할 문자의 배열을 생성
  for (let i = 0; i < my_string.length; i++) {
      // my_string 의 길이만큼 반복함
    if (!vowel.includes(my_string[i])) answer += my_string[i];
      // vowel에 포함된 모음이 매개변수로 주어진 my_string에 포함되어있지않다면,
      // answer 변수에 my_string의 i 번째 index를 추가함.
  }
  return answer;
}