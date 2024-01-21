function solution(my_string) {
    var numlist = [];
        // my_string 내에서 숫자만 골라내서 오름차순으로 정렬 .
        for(let i = 0 ; i < my_string.length; i ++){
            //반복문 이용하여 배열 순회
            if(!isNaN(my_string[i])){
                // isNaN -> Not a Number 숫자가 아닌지 확인 ,
                // !를 써서 숫자인지 확인시킴
                numlist.push(parseInt(my_string[i]))
                //문자로 추가가 되니 my_string[i]를 parseInt를 이용해 숫자로 바꿔 준 후
                //numlist에 my_string[i]를 추가
            }
        }
        numlist.sort();
        //오름차순 정렬
    return numlist;
}