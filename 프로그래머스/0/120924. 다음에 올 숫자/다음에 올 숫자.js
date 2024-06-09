function solution(common) {
    var answer = 0;
    var arr = [];

        if(common[1] - common[0] == common[2] - common[1]){
            var min = common[1] - common[0]
            answer = common[common.length-1] + min
        } else {
            var int = common[1]/common[0];
            answer = common[common.length-1] * int
        }
  
    return answer;
}