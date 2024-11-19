const input = require('fs').readFileSync('/dev/stdin')
  .toString().trim().split('\n').map((v) => v.split(" ").map((v) => +v)).flat();

  function cantore(str) {
if(str.includes('---')){
  const len = str.length/3
  const splitedArr = []
  for(let i = 0; i <= str.length  - len ; i += len){
    splitedArr.push(str.slice(i,i+len))
  }
  splitedArr[0] = cantore(splitedArr[0])
  splitedArr[1] = splitedArr[1].replaceAll("-", " ")
  splitedArr[2] = cantore(splitedArr[2])
  return splitedArr.join("")
}
return str

}

const result = input.map(a => {
  const dash = '-'.repeat(3**a)
  return cantore(dash)
})

console.log(result.join("\n"))