function solution(my_string, index_list) {
    
    return index_list.map(a=> [...my_string][a]).join('');
}