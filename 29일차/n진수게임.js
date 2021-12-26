function solution(n, t, m, p) {
  const arr = [];
  const answer = [];

  for (let i = 0; i < t * m; i++) {
    arr.push(i.toString(n).toUpperCase().split(""));
  }

  const real = arr.flatMap(v => v);

  for (let j = p - 1; j < t * m; j += m) {
    answer.push(real[j]);
  }

  return answer.join("");
}
