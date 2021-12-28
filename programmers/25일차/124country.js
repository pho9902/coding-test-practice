const re = (n, answer) => {
  if (n > 0) {
    switch (n % 3) {
      case 1:
        answer = "1" + answer;
        n = Math.floor(n / 3);
        break;

      case 2:
        answer = "2" + answer;
        n = Math.floor(n / 3);
        break;

      default:
        answer = "4" + answer;
        n = n / 3 - 1;
        break;
    }
    return re(n, answer);
  } else return answer;
};

const solution = n => {
  let answer = "";
  return re(n, answer);
};

console.log(solution(15));
