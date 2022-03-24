var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = parseInt(input[0]);
const words = [];

const obj = {};
let num = 0;

for (let i = 1; i <= N; i++) words.push(input[i])

for (let word of words) {
    for (let i = 0; i < word.length; i++) {
        obj[word[i]] = 0;
    }
}

words.sort((a, b) => a.length - b.length)

for (let word of words) {
    for (let i = 0; i < word.length; i++) {
        obj[word[i]] += Math.pow(10, word.length - (i + 1));
    }
}

const sortObj = [];

for (let i in obj) {
    sortObj.push([i, obj[i]]);
}
sortObj.sort((a, b) => b[1] - a[1])

for (let i = 0; i < sortObj.length; i++) {
    num += sortObj[i][1] * (9 - i);

}

console.log(num)
