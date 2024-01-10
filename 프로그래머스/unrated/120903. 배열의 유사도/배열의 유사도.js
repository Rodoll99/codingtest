function solution(s1, s2) {
   return s1.filter((e)=>s2.includes(e)).length;
    // filter(함수) -> 원하는 데이터를 조건문이있는 함수를 이용해 추출 가능
    // s2에서 e라는 현재요소를 포함하는 원소(즉 , 같은원소)를
    // s1에서 찾아서 그 갯수를 반환하겠다
    
}