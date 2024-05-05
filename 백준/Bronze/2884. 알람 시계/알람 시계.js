
let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

var H = Number(input[0]);
var M = Number(input[1]);
var ealryM = M - 45;
if( ealryM < 0 ){
    ealryM = 60 + ealryM;
    H -= 1 ;
}
if(H < 0){
    H = 23;
}
console.log(H +" "+ ealryM)