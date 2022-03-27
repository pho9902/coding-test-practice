let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()

let n = parseInt(input);

const obj = { 0: 0, 1: 1};

function fibo(el) {
    if (obj[el] !== undefined) return obj[el];
    obj[el] = fibo(el - 1) + fibo(el - 2)
    return obj[el]
}

console.log(fibo(n))