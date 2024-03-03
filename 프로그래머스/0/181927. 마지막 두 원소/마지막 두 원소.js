function solution(num_list) {
     const num1 = num_list[num_list.length-1]
     const num2 = num_list[num_list.length-2]
        if(num1 > num2){
            num_list.push(num1 - num2)
        }else{
           num_list.push(num1 * 2)
        }
    return num_list;
}