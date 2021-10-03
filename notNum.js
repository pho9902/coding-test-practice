function solution(numbers) {
  let answer = 45;
  for (let number of numbers) {
    answer -= number;
  }
  return answer;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
