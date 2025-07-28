function solution(s) {
  return (
    String(Math.min(...s.split(" ").map(el => parseInt(el)))) +
    " " +
    String(Math.max(...s.split(" ").map(el => parseInt(el))))
  );
}
