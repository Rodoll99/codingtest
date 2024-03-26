function solution(name, yearning, photo) {
  
  // 객체를 만들어 점수를 저장한다.
  // 객체는 키와 밸류값으로 저장됨
  // ex) {may: 5, kein: 10, kain: 1, radi: 3}
  const memory = {};
  for (let i = 0; i < name.length; i++) {
    memory[name[i]] = yearning[i];
    
  }
    //객체에서의 중괄호는 접근하려는 객체의 이름(키)을 검색하면 밸류값을 리턴함
    console.log(memory["may"]);
    
  // 각 포토 마다의 점수를 배열로 구해야 하므로 map을 이용한다.
  return photo.map((arr) =>
    // 각 요소 배열을 reduce 메서드를 이용해 점수를 구한다.
    // memory 객체에 해당 사람이 있으면 점수를 없으면 0을 더해준다.
    arr.reduce((acc, cur) => acc + (memory[cur] || 0), 0)
    
  );
}