function solution(spell, dic) {
    var answer = 0;
    var dicArr = [];
    var sortSpell = spell.sort().join('');
    
        for(let i = 0 ; i < dic.length ; i ++){
            dicArr.push(dic[i].split('').sort().join(''));
            if(dicArr[i] === sortSpell){
                answer = 1;
                break;
                //return = 1; 을 해버리니 바로 결과를 리턴해버려 에러가 계속 났었음 
                //return이 아닌 answer = 1; 과 else를 사용하니 dicArr를 순회하며 비교하여 결과를 제대로 불러 올 수 있었음
            }else{
                answer = 2;
            }
        }
    return answer;
}