function solution(words) {
  if (words.length % 2) return 0;

  const answer = [];

  for (let word of words) {
    word === answer[answer.length - 1] ? answer.pop() : answer.push(word);
  }

  return answer.length ? 0 : 1;
}

var age = 26;
