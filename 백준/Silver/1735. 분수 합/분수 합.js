const fs = require("fs");
const [moles, denoms] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [fM, fD] = moles.split(" ").map(BigInt);
let [sM, sD] = denoms.split(" ").map(BigInt);

let mole = fM * sD + sM * fD;
let denom = fD * sD;

const gcd = (x, y) => {
  // console.log(x, y)
  if (y == 0) return x;
  else return gcd(y, x % y);
};

const divisor = gcd(mole, denom);

console.log(`${mole / divisor} ${denom / divisor}`);
