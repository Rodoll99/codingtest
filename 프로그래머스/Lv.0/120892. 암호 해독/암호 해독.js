function solution(cipher, code) {
    var answer = [];
        for(let i = 0 ; i <cipher.length ; i ++){
            if ((i+1) % code == 0 ){
                // i+1(인덱스번호)를 code(배수)와 나눈 나머지가 0일때에
                // -> code의 배수의 인덱스번호를 찾는 식
                answer.push(cipher[i]);
            }
        }
    return answer.join('');
}