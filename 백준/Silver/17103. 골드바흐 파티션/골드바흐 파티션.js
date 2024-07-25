let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift();
let number = input.map(Number)
let answer = [];
  let maxNum = Math.max(...number)
  let sleve = Array.from({length:maxNum+1}, ()=>true)
    sleve[0] = false;
    sleve[1] = false;

    for(let i = 2; i<=Math.sqrt(maxNum); i++){  
      if(sleve[i]){
        for(let j = 2; j <= (maxNum / i); j++){
          sleve[i * j] = false;
        }
      }
    }    
  
  for(let x of number){
    let count = 0;
    for(let i = 2; i<=(x/2); i++){  
        if(sleve[i] && sleve[x-i]) count++
    }
    answer.push(count);
  }  
  console.log(answer.join('\n'))