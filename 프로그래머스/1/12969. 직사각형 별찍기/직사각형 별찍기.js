process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let i=0; i < b ; i++){
        var answer = "" // 이 블럭에 선언을 해야지 정상적으로 같은 가로길이의 변수를 출력가능함.( 맨위에 선언하니 별의 갯수가 중복이되어 출력됨)
        for(let j= 0; j < a; j++){
                answer += "*"
        }   
        console.log(answer);
    }
});