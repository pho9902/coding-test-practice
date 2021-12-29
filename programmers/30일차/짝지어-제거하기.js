function solution(words) {
  const answer = [];

  for (let word of words) {
    word === answer[answer.length - 1] ? answer.pop() : answer.push(word);
  }

  return answer.length ? 0 : 1;
}
