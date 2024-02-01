// function solution(numbers) {
//     var answer = 0;
//     const strNum = ["zero", "one", "two", "three", "four", "five",
//                  'six', "seven", "eight", "nine"]
//     //요소에 포함될 영어들을 strNum 배열에 할당
//         for(let i = 0; i <= numbers.length; i ++){
//             numbers = numbers.split(strNum[i]).join(i)
//             // strNum[i]를 기준으로 나누어주고 문자열로 변환시켜줌
//         }
//     return Number(numbers);
//     //변환된 문자열을 Number를 이용해 숫자로 변환
// }
function solution(numbers) {
    let numStr = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

    numStr.forEach((str, idx) => {
        numbers = numbers.replaceAll(str, idx);
    });
    //각 반복에서 str은 현재 순회 중인 영어 단어이고, idx는 해당 단어의 인덱스(숫자)입니다.
    //numbers.replaceAll(str, idx)를 사용하여 numbers 문자열에서 현재 순회 중인 영어 단어를 해     //당하는 숫자로 모두 교체합니다. 이 작업을 통해 numbers 문자열에는 더 이상 영어 단어가 포함되지 않     //습니다.
    return Number(numbers);
}