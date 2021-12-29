function solution(s) {
  const answer = [];
  const strArr = s.split("");

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] === answer[answer.length - 1]
      ? answer.pop()
      : answer.push(strArr[i]);
  }

  return answer.length ? 0 : 1;
}
