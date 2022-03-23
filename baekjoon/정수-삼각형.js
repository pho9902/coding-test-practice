const fs = require('fs');
const [n, ...array] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(n);
let triangle = array.map(v => v.split(' ').map(v => +v))

for (let i = 1; i < N; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j == 0) triangle[i][j] += triangle[i - 1][j]
      else if (j == triangle[i].length - 1) triangle[i][j] += triangle[i - 1][j - 1];
      else triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j])
    }
  }

console.log(Math.max(...triangle[N - 1]))