function solution(n) {
  return n
    .toString(2)
    .split("")
    .reduce((acc, cur) => {
      return parseInt(acc) + parseInt(cur);
    }, 0);
}
