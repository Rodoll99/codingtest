function solution(num_list) {
    var arr1 = num_list.filter(( a , i )=> i % 2 == 0 ).reduce((a,b)=>a+b)
    var arr2 = num_list.filter(( a , i )=> i % 2 !== 0 ).reduce((a,b)=>a+b)
    
   return arr1 > arr2 ? arr1 : arr2
 
}