// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = [5, ['A', '.', 'B'], ['A', '.', 'B'], ['A', '.', 'B'], ['A', '.', 'B'], ['A', '.', 'B']
]
var N = parseInt(input[0]);
const lines = [];
const answer = [];

for (let i = 1; i <= N; i++) lines.push(input[i]);

while (answer.length <= N) {
    for (let i = 0; i < N; i++) {
        answer.push(lines[i][0])
        if (lines[i][1] !== '.') continue;
        else {
            if (lines[i][2] !== '.')
        }
    }
}