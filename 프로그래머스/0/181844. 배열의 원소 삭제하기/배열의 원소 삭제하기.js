function solution(arr, delete_list) {
    //delete_list에 현재 요소가 포함이 되지않는다면 filter로 남김
    return arr.filter(a => !delete_list.includes(a));
}