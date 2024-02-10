function solution(score) {
    const average = score.map(([eng,math]) => (eng + math) / 2 );
    const sortedAverage = [...average].sort((a,b) => b-a);
    return average.map((v) => sortedAverage.indexOf(v) + 1);
}