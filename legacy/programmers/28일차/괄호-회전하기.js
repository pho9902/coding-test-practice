// (아직 못 품)

const s = "([](()){})";

function solution(s) {
  if (s.length % 2 !== 0) return 0;

  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const sArr = s.split("");

  let cnt = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (match(sArr, obj)) cnt++;
    sArr.push(sArr.shift());
  }
  return cnt;
}

const match = (array, obj) => {
  let temp = 0;

  array.forEach((el, idx) => {
    if (obj[el] === undefined) return false;
    if (array.indexOf(el) > array.indexOf(obj[el])) return false;
    if (
      array.slice(array.indexOf(el) + 1, array.indexOf(obj[el])).length % 2 ===
      0
    )
      temp++;
  });

  return temp === array.length / 2 ? true : false;
};

console.log(solution(s));
