let fs = require("fs");

    let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
    let N = input.shift();

    input = input.join(" ");
    let answer = 0;

    // ENTER로 split한 후, 각 요소에서 공백을 제거하고 빈 문자열을 필터링
    let newArr = input.split("ENTER").map(x => x.trim()).filter(x => x !== "");

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] !== '') {
            let arr = newArr[i].trim().split(" ").filter(x => x !== "");  // 공백 제거 후 빈 문자열 필터링
            let set = new Set(arr);  // 중복을 제거한 후 카운트
            answer += set.size;
        }
    }

    console.log(answer);

