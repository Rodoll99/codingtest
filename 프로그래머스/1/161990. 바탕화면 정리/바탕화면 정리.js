function solution(wallpaper) {
    var answer = [];
    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

    for (let i = 0; i < wallpaper.length; i++) {
        let x = wallpaper[i];
        let firstIndex = x.indexOf("#");
        let lastIndex = x.lastIndexOf("#");

        if (firstIndex !== -1) {
            minX = Math.min(minX, i);
            maxX = Math.max(maxX, i);
            minY = Math.min(minY, firstIndex);
            maxY = Math.max(maxY, lastIndex);
        }
    }

    if (minX === Infinity) {
        return answer; // Return empty answer if no '#' found
    }

    // Add 1 to maxY for the end point (exclusive)
    answer.push(minX, minY, maxX + 1, maxY + 1);
    return answer;
}

// 테스트 실행 예시
console.log(solution([
    "..#......",
    "......#..",
    ".###.....",
    "......###",
    "...#....."
])); // [0, 2, 5, 9]
