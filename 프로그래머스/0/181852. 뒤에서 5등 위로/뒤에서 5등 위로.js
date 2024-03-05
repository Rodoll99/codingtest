function solution(num_list) {
    // 오름차순 정렬후 필터로 5개의 인덱스 위로만 남겨놓고 제거
    return num_list.sort((a,b)=> a-b).filter((a,b)=> b>4);
}