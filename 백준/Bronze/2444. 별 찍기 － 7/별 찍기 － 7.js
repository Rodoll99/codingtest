
let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" ").map(Number));
input = input.flat();
const N = input[0]
for(let i = 1 ; i<N; i++){
    let blank = ' '.repeat((N-i));
    let stars = "*".repeat(i+(i-1));
    console.log(blank + stars)
}
for(let j = N ; j > 0; j--){
    let blank = ' '.repeat( (N-j) );
    let stars = '*'.repeat( j+(j-1) );
    console.log(blank + stars)
}
