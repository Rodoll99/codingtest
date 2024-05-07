let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
var longLength = input[0] / 4
var str = ''

for(let i = 0 ; i < longLength ; i ++){
    str += 'long ';
}

console.log( str + "int")
