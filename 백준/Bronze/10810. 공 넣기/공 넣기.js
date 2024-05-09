const file = process.platform === 'linux' ? '/dev/stdin' :'./input.txt'
const input = require('fs').readFileSync(file).toString().split('\n');
const [N, M] = input[0].split(' ').map(Number)
const baskets = new Array(N).fill(0)


for (let i =1 ; i<=M;i++){
    const [start,end, ball] = input[i].split(' ').map(Number)
    
    for(let j = start ; j <=end;j++){
        baskets[j-1] = ball
    }
}

console.log(baskets.join(" "))