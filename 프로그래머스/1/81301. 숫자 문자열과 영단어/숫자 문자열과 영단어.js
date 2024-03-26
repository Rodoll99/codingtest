function solution(s) {
    var engNum = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    var answer = s;
    
    for(let i = 0; i <engNum.length; i++){
        //배열을 만들어 engNum[i]번을 기준으로 나눔
        let arr = answer.split(engNum[i]);
        //인덱스 번호를 이용해 조인함
        answer = arr.join(i)
        console.log(answer)
    }
    return Number(answer);
}