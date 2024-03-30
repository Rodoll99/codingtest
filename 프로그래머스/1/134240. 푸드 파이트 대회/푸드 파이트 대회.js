function solution(food) {
  let arr = [];
  food.map((e, i) => {
    if (e > 1) {
        //1은 항상 물로 고정되어있음
        //배열에 현재 요소의 인덱스를 문자열로 반환하고 e를 2로 나눈값을 반올림하여 반복함 
      arr.push(i.toString().repeat(Math.floor(e / 2)));
    }
  });
    //배열을 문자열로 반환하고 0을 추가한뒤 배열을 뒤집은값을 문자열로 다시 합침
  return arr.join("") + "0" + arr.reverse().join("");
}