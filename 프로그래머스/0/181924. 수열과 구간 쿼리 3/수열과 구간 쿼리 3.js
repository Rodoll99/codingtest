function solution(arr, queries) {
    var anwer = [];
    // queries의 두 요소를 a,b에 저장
    for( let [a,b] of queries){
        //각각의 인덱스 값을 서로 바꿈
        [arr[a],arr[b]] = [arr[b],arr[a]]
    }
    return arr;
    }
