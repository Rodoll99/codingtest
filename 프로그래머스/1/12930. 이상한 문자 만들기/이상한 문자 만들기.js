function solution(s) {
    var arr = [];
    var stringArr = s.split(" ");

    for (let i = 0; i < stringArr.length; i++) {
        var word = stringArr[i];
        var spliteWord = [...word];
        for (let j = 0; j < spliteWord.length; j++) {
            if (j % 2 === 0) {
                arr.push(spliteWord[j].toUpperCase());
            } else {
                arr.push(spliteWord[j].toLowerCase());
            }
        }
        // 각 단어 사이에 공백 추가
        arr.push(" ");
    }
    // 마지막 공백 제거
    arr.pop();
    return arr.join("");
}
