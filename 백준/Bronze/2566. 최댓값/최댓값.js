const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(Number));
const maxNum = Math.max(...input.flat())
result = []
for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input.length; j ++){
        if(input[i][j] == maxNum){
            result.push([ maxNum ],[i+1 , j+1])
        }
    }
}
console.log(result[0].join(""))
console.log(result[1].join(" "))