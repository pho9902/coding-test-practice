const input = [
  [-1, 1, 1],
  [1, -1, 1],
];

const solution = array => {
  const answer = [];
  for (let el of array) {
    el[0] === el[2]
      ? answer.push([el[0], -el[1], el[2]])
      : answer.push([-el[0], el[1], -el[2]]);
  }

  return answer;
};

console.log(solution(input));
