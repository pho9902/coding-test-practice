function solution(dartResult) {
  const turn = [];
  const answers = [];
  let num = 0;
  let result = 0;

  //게임 회차별로 나누기
  for (let i = 0; i < dartResult.length; i++) {
    if (isNaN(dartResult[i]) === false) {
      if (dartResult[i] == 0 && Number(dartResult[i - 1]) === 1) num = 10;
      else if (dartResult[i] <= 9 && dartResult[i] >= 0) num = dartResult[i];
    } else if (dartResult[i] === "*" || dartResult[i] === "#")
      turn.push([num, dartResult[i - 1], dartResult[i]]);
    else if (
      dartResult[i] === "S" &&
      dartResult[i + 1] !== "#" &&
      dartResult[i + 1] !== "*"
    )
      turn.push([num, dartResult[i]]);
    else if (
      dartResult[i] === "D" &&
      dartResult[i + 1] !== "#" &&
      dartResult[i + 1] !== "*"
    )
      turn.push([num, dartResult[i]]);
    else if (
      dartResult[i] === "T" &&
      dartResult[i + 1] !== "#" &&
      dartResult[i + 1] !== "*"
    )
      turn.push([num, dartResult[i]]);
  }

  // 계산
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      if (turn[j][k] === "S") answers.push(turn[j][k - 1]);
      else if (turn[j][k] === "D") answers.push(turn[j][k - 1] ** 2);
      else if (turn[j][k] === "T") answers.push(turn[j][k - 1] ** 3);
      else if (turn[j][k] === "#") answers[answers.length - 1] *= -1;
      else if (turn[j][k] === "*") {
        answers[answers.length - 1] *= 2;
        answers[answers.length - 2] *= 2;
      }
    }
  }
  for (let el of answers) {
    result += parseInt(el);
  }

  return result;
}
