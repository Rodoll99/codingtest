function solution(my_string, queries) {
    
        my_string = my_string.split("")
        for(let [a,b] of queries){
            let tmp = my_string.splice(a , b-a+1).reverse()
            my_string.splice(a,0,...tmp)
            
        }
        return my_string.join ("")
}