let fs = require('fs');
let input = require('fs').readFileSync(0).toString().split('\n');

const X = Number(input[0]);
const Y = Number(input[1]);

switch (true){
    case X > 0 && Y > 0 :
    console.log(1)
    break;

    case X < 0 && Y > 0 :
    console.log(2)
    break;

    case X < 0 && Y < 0 :
    console.log(3)
    break;

    default :
    console.log (4)
    break;

}