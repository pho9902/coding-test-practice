const N = "good";
const M = "daood";

const solution = (N, M) => {
  const childArray = N.split("");
  const set = new Set(childArray);
  const childs = [...set];
  const parent = M.split("");

  let answer = 0;

  childs.map(child => {
    parent.map((el, idx) => {
      if (child === el) answer += idx;
    });
  });

  return answer;
};

console.log(solution(N, M));
