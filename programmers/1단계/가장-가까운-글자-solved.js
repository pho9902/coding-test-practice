function solution(s) {
  const answer = [];
  const obj = {};

  s.split("").forEach((el, idx) => {
    if (!obj[el]) {
      obj[el] = idx + 1;
      answer[idx] = -1;
    } else {
      answer[idx] = idx - obj[el] + 1;
      obj[el] = idx + 1;
    }
  });

  return answer;
}
