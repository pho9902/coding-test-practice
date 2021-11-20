// 입력 [정수들] 원소는 한개 이상
// 리턴 [최소값, 합계, 최대값]
// 입력 배열의 원소의 갯수가 1개 일때 ex) [12] => [12, 12, 12]
// 같은값이 있을때 [3, 3, 2] => 최소 2  최대 3 합 8 [3, 3, 3] 최소3 최대 3 합 9
// [3, 3] => [3, 6, 3]
const solution = array => {
  if (array.length === 1) return [array[0], array[0], array[0]];
  return [
    Math.min(...array),
    array.reduce((a, b) => a + b),
    Math.max(...array),
  ];
};

const array1 = [3];
const array2 = [5, 2, 13, 23, 100, 4];
const array3 = [2, 2];

console.log(solution(array2));
