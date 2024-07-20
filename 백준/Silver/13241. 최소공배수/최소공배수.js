const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ")
const gcd = (a, b) => a%b === 0 ? b : gcd(b, a%b)
const lcm = Math.floor((A*B) / gcd(A, B))
console.log(lcm)