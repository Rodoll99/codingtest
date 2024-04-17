function solution(ingredient) {
    let answer= 0;
    //stack 을 지정함
    const stack = [];
    //ingredient 배열의 i요소를 스택에 추가함,
    //stack에 추가된 요소의 마지막 4개의 숫자가 1231과동일하다면
    //스택을 빈배열로 초기화하고 answer 는 1씩 증가함
    for(let i of ingredient){
        stack.push(i);
        if(stack.slice(-4).join('') === '1231'){
            answer ++;
            stack.splice(-4);
        }
    }
    return answer;
}