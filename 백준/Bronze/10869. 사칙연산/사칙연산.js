const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    const A = input[0]
    const B = input[1]
	console.log(A+B);
    console.log(A-B);
    console.log(A*B);
    //몫을 구하는 문제임 , parseInt를 통해 정수만 뽑아냄
    console.log(parseInt(A/B));
    console.log(A%B);
}); 