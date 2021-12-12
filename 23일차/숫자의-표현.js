function solution(n) {
  let start = 1;
  let answer = 1; //무조건 1개는 있음

  while (start <= n) {
    let result = 0;
    for (let i = start; i < n; i++) {
      result += i;
      if (result === n) answer += 1;
      else if (result > n) break;
    }
    start += 1;
  }
  return answer;
}
