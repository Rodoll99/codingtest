let fs = require("fs");

let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const [N,M] = input.shift().split(" ").map(Number);

input = input.filter(a=> a.length >= M)

let map = new Map();
for(let i = 0; i < input.length ; i++){
    if(map.has(input[i])){
        map.set(input[i] , map.get(input[i]) + 1 )
    }else {
        map.set(input[i] , 1 )
    }
}

map = [...map].sort(function(a,b){
    if(a[1]==b[1]){
        if(a[0].length == b[0].length){
            return a[0].localeCompare(b[0]);
        }else{
            return b[0].length - a[0].length
        }  
    }else{
        return b[1] - a[1]
    }
})
let answer = map.map(a=>a[0])
console.log(answer.join("\n"))

