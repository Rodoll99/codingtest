function solution(array, n) {
    let newArr = []; //배열 선언
        for (let i = 0; i < array.length; i++){
            if (array[i] === n ){
                newArr.push(array[i]);
                //newArr 에 array[i] 를 새로 추가함
            }
        }
    return newArr.length; // 길이는 곧 n이 포함된 개수를 뜻함
}