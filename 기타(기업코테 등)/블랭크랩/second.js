function solution(S1, S2) {
  return getTree(S2) | "1".repeat(1024);
}

function getTree(img) {
  if (img === "b") return "1".repeat(1024);
  if (img === "w") return "0".repeat(1024);
}

console.log(solution("ppwwwbpbbwwbw", "pwbwpwwbw"));
console.log(solution("ppwwwbpbbwwbw", "w"));
