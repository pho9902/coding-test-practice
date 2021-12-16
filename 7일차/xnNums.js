function solution(x, n) {
  const answer = [];
  const add = x;
  for (let i = 0; i < n; i += 1) {
    answer.push(x);
    x += add;
  }
  return answer;
}
