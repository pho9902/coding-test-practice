function solution(answers) {
  const answer = [];
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const rank = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (patterns[0][i % 5] === answers[i]) rank[0]++;
    if (patterns[1][i % 8] === answers[i]) rank[1]++;
    if (patterns[2][i % 10] === answers[i]) rank[2]++;
  }

  for (let j = 0; j < 3; j++) {
    if (rank[j] === Math.max(...rank)) answer.push(j + 1);
  }
  return answer.sort();
}
