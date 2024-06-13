function solution(answers) {
    const answer = [];
    
    // 수포자들이 찍는 방식의 패턴(s1, s2, s3)과 채점표(score)를 각각 배열로 변환
    const s1 = [1, 2, 3, 4, 5];
    const s2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const score = [0, 0, 0];
    
    // 배열 answers가 주어졌을 때, 문제를 맞힌 횟수를 각각 채점해 score에 입력
    for (let i = 0; i < answers.length; i++) {
        //i를 각 패턴의 길이만큼 나눈 나머지를 구하면 현재 위치를 구할 수 있음,
        //ex) i가 14라면 answers[14] 는 14에서 5를 나눈 나머지 = 4 s1의 4번째 인덱스 번호의 값을 가져올 수가 있음.
        //답을 맞출 수록 각 인원의 score를 증가시킴
        if (s1[i % s1.length] === answers[i]) {
            score[0]++;
        }
        if (s2[i % s2.length] === answers[i]) {
            score[1]++;
        }
        if (s3[i % s3.length] === answers[i]) {
            score[2]++;
        }
        console.log(score)
    }
    
    
    // 채점 결과, 가장 많은 문제를 맞힌 사람을 배열에 담아 return
    const max = Math.max(...score);
    for (let j = 0; j < score.length; j++) {
        //만약에 가장 많이 맞춘사람이 중복된다면
        if (score[j] === max) {
            //answer에 그 인원의 번호를 추가함
            answer.push(j + 1);
        }
    }
    
    return answer;
}