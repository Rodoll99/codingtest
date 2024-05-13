
let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(a=> a.split(" "));


for(let i = 1; i < input.length; i++ ){
    var result = ''
    var str = input[i][1]
    var cnt = input[i][0]
    for( let j = 0; j <str.length; j ++){
        result += str[j].repeat(cnt)
    }
    console.log(result)
}
