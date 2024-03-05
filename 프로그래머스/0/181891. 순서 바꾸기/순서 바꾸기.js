function solution(num_list, n) {
    //n번만큼 반복
    for(let i = 0; i < n; i++){
        //첫번째 요소를 맨뒤에 추가하고
        num_list.push(num_list[0]);  
        //첫번째 요소 삭제
        num_list.shift();
    }
    return num_list;
}