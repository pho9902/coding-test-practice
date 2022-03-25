var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
const line0 = input[0].split(' ')
var N = parseInt(line0[0]);
var K = parseInt(line0[1]);
const A = [];
for (let i = 1; i < N + 1; i++) A.push(parseInt(input[i]))

let cnt = 0;
for (let j = 1; j < A.length + 1; j++) {
    if (K >= A[A.length-j]) {
        K -= A[A.length-j];
        cnt++;
        if (K >= A[A.length-j]) j--;
    }

    else if (K === 0) break;

    else continue;
}

console.log(cnt);
