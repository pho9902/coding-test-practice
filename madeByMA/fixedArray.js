const solution = array => {
  if (array.length === 1) return [array[0], array[0], array[0]];
  return [
    Math.min(...array),
    array.reduce((a, b) => a + b),
    Math.max(...array),
  ];
};

const array1 = [3];
const array2 = [-5, 2, 13, 23, 100, 4];
const array3 = [2, 2];

console.log(solution(array2));
