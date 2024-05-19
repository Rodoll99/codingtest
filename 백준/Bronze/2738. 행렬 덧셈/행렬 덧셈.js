const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(Number));


len = input[0][0]
cnt = input[0][1]
newArr = []
for(let i = 1 ; i <=len ; i++){
    let arr = [];
    newArr.push(arr)
    for(let j = 0 ; j < cnt ; j ++){
        arr.push(input[i][j] + input[i+len][j])
    }
}
for(let i = 0; i < newArr.length; i++){
    console.log(newArr[i].join(" "))
}
