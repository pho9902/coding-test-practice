const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const n = Number(input);

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(n));
