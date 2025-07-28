const solution = (arr, div) => {
  const answer = [];
  for (let el of arr) el % div === 0 && answer.push(el);
  return answer.length === 0 ? [-1] : [Math.max(...answer)];
};

console.log(solution([3, 21, 5, 27, 2], 3));

console.log(solution([3, 21, 5, 27, 2], 19));
