function solution(s) {
  let answer = 0;
  let cnt = 0;

  while (1) {
    if (s === "1") return [cnt, answer];
    const [count, newS] = re(s);
    s = newS;
    answer += count;
    cnt++;
  }
}

function re(s) {
  const len = s.split("").filter(el => el !== "0").length;
  const cnt = s.length - len;
  return [cnt, len.toString(2)];
}
