
let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" "));
input = input.flat();
let count = input.length;
let word;
for(let i = 1 ; i < input.length; i++ ){
    word = input[i]
    for(let j= 0 ; j < word.length-1; j++){
        if(word[j]!= word[j+1] && !!word.slice(j+1).includes(word[j])){
            count --;
            break;
        }
    }
}

console.log(count-1)