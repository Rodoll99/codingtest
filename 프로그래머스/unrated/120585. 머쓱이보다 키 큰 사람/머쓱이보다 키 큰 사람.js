const solution = (array, height) => {
    //solution이라는 상수에 화살표 함수를 정의 , 이 함수는 두 개의 매개변수(array와 height)를 받음
    let answer = 0;
    answer = array.filter(tall => tall > height)
    //array 배열에서 높이가 height보다 큰 요소들로 이루어진 새로운 배열을 생성하고, 이 배열을 answer 변수에 할당함
    return answer.length;
    //return answer.length;: answer 배열의 길이(요소의 개수)를 반환함
}