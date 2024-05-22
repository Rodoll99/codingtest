const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    var A = Number(input[0])
    var B = Number(input[1])
    console.log(A+" + "+B+" = "+ Number(A+B));
});