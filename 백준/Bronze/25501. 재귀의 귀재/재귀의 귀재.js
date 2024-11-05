let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")
let N = input.shift()

let cnt = 0;

const recursion = (s,l,r) =>{
    cnt += 1;
    if(l >=r ){
        return 1;
    }else if(s[l] != s[r] ){
        return 0;
    } else {
        return recursion (s, l +1 , r-1);
    }
};

const isPalinderome =(s) =>{
    return recursion(s,0,s.length -1);
}

for( i = 0; i <N; i++){
    cnt = 0;
    console.log(isPalinderome(input[i].trim()) ,cnt);
}
