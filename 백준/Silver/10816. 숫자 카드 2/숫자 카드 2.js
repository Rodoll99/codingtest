let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(a=>a.split(" ").map(Number))

var cards = input[1]
var findCards = input[3]
var cardMap = new Map();
var answer = [];
for(let i = 0; i<cards.length; i++){
    if(cardMap.has(cards[i])){
        cardMap.set(cards[i] , cardMap.get(cards[i])+1)
    }else{
        cardMap.set(cards[i] , 1)
    }
}
for(let i = 0; i<findCards.length; i++){
    if(cardMap.has(findCards[i])){
        answer.push(cardMap.get(findCards[i]))
    }else{
        answer.push(0)
    }
}
console.log(answer.join(" "))