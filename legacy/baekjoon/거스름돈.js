var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var money = parseInt(input[0]);
let change = 1000 - money;
let cnt = 0;

while (change > 0) {
    if (change >= 500) {
        change -= 500;
        cnt++;
    }
    else if (change >= 100) {
        change -= 100;
        cnt++;
    }

    else if (change >= 50) {
        change -= 50;
        cnt++;
    }

    else if (change >= 10) {
        change -= 10;
        cnt++;
    }

    else if (change >= 5) {
        change -= 5;
        cnt++;
    }

    else {
        change -= 1;
        cnt++
    }
}

console.log(cnt);