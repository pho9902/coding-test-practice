function solution(N, stages) {
  const failRate = [];
  const answer = {};
  const result = [];

  for (let i = 1; i <= N; i++) {
    let winner = stages.filter(el => el >= i).length;
    let challenger = stages.filter(el => el == i).length;
    failRate.push(challenger / winner);

    answer[i] = failRate[i - 1];
  }

  let sortanswer = [];
  for (let sort in answer) {
    sortanswer.push([sort, answer[sort]]);
  }
  sortanswer.sort((a, b) => b[1] - a[1]);

  for (let el of sortanswer) {
    result.push(parseInt(el[0]));
  }
  return result;
}
