function solution(keymap, targets) {
  const answer = [];
  const map = new Map();

    //keymap 순환
  for (const key of keymap) {
    // key를 순환
    for (let i = 0; i < key.length; i++) {
       //만약에 map에 key[i]가 없거나 , i+1 보다 map.get(key[i]) 가 더 작을때에
        //map에 key[i]와 밸류값으로 i+1을 추가함 (그버튼과 , 그버튼을 누르기 위한 최소 횟수가 저장될것임)
      if (!map.has(key[i]) || i + 1 < map.get(key[i]))
          map.set(key[i], i + 1);
    }
  }

    //각 요소를 target이라는 이름으로 targets를 순회함
  for (const target of targets) {
      //count를 할당해주고
    let count = 0;
      //target[i]를 순회하면서
    for (let i = 0; i < target.length; i++) {
    //count에 map에서 target[i]와 같은 key의 밸류를 더해줌
      count += map.get(target[i]);
    }
    //answer 에 count 혹은 없을시에는 -1을 추가함
    answer.push(count || -1);
  }

  return answer;
}