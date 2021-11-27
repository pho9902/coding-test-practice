function solution(record) {
  const answer = [];
  const obj = {};
  for (let el of record) {
    if (el.split(" ")[0] === "Leave") continue;
    obj[el.split(" ")[1]] = el.split(" ")[2];
  }

  for (let els of record) {
    if (els.split(" ")[0] === "Enter") {
      answer.push(obj[els.split(" ")[1]] + "님이 들어왔습니다.");
    } else if (els.split(" ")[0] === "Leave") {
      answer.push(obj[els.split(" ")[1]] + "님이 나갔습니다.");
    }
  }

  return answer;
}
