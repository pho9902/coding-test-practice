function solution(strings, n) {
  const obj = {};
  const answer = [];

  for (let key of strings) {
    obj[key[n]] = [];
  }

  for (let string of strings) {
    obj[string[n]].push(string);
  }

  Object.keys(obj)
    .sort()
    .forEach(standard => {
      answer.push(obj[standard].sort());
    });

  return answer.flatMap(e => e);
}
