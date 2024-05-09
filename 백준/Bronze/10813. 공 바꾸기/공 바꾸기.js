const file = process.platform === 'linux' ? '/dev/stdin' :'./input.txt'
const input = require('fs').readFileSync(file).toString().split('\n');
//첫번째 줄에 있는 값을 N , M 으로 할당
const [N, M] = input[0].split(' ').map(Number)
//baskets 변수에 길이 N 의 배열을 0으로 채워 각 순서에 맞는 번호를 적용한다
const baskets = new Array(N).fill(0).map((n,index)=>index+1)

//M 번까지 반복하며
for (let i =1 ; i<=M;i++){
    //주어진 배열을 num1 , num2로 할당
    const [num1,num2] = input[i].split(' ').map(Number)
    //tmp에 원래 바구니에 맞는 숫자를 할당 시킨다.
    var tmp = baskets[num1-1];
    //서로의 위치를 바꿔준다.
    baskets[num1-1]= baskets[num2-1];
    baskets[num2-1]= tmp;

}

console.log(baskets.join(" "))