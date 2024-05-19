const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(item=>item.split(' '));

//객체로 gradeTable에 등급과 점수를 저장함
gradeTable = {
    "A+": 4.5 , A0:4.0,
    "B+": 3.5 , B0:3.0,
    "C+": 2.5 , C0:2.0,
    "D+": 1.5 , D0:1.0,
    F:0.0
}

sum = 0;
total = 0;
//for문을 이용해 input의 요소를 subject , score , grade로 할당해주고
for( let [subject , score , grade ] of input){
    //P는 과목에서 제외해야하기때문에
    if(grade === 'P'){
        continue;
    }
    //sum 에 학점과 치훈이의 등급을 곱한값을 더해주고
    sum+= Number(score) * gradeTable[grade]
    //학점을 다 더해준 값을 할당해주고
    total += Number(score)
    
}
//출력
console.log(sum/total)