let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
var [N,M] = input[0].split(" ").map(Number)
input.shift();

var map = new Map();
for (let x of input){
    var [person , cur] = x.split(" ")
    if(map.get(person) === undefined || map.get(person) === "leave" ){
        map.set(person , "enter")
    }else if(map.get(person) == "enter"){
        map.set(person , "leave")
    }
}
console.log([...map].filter(a => a[1] == "enter").map(a=>a[0]).sort().reverse().join("\n"))

