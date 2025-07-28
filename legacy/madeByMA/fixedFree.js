const solution = (pattern, s) => {
  const patterns = pattern.split("");
  const obj = {};
  const sArr = s.split(" ");

  if (patterns.length !== sArr.length) return false;

  let N = pattern.length;

  for (let i = 0; i < pattern.length; i++) {
    obj[patterns[i]] = sArr[i];
  }

  sArr.map((el, idx) => {
    if (el === obj[patterns[idx]]) N -= 1;
  });

  return N === 0 ? true : false;
};

const pattern = "aaaa";
const pattern2 = "aba";
const s = "foo bar bar foo";
const s2 = "foo foo foo foo";
const s3 = "foo foo foo bar";
const s4 = "foo bar baz foo";
const s5 = "foo bar foo bar";
console.log(solution(pattern, s2));

// const pattern = 'abbc';
// const str = 'foo bar bar foo';

// function solution(pattern, str) {
//   const patterns = pattern.split('');
//   const strArr = str.split(' ');
//   const myObj = {};

//   if (patterns.length !== strArr.length) return false;

//   for (let i = 0; i < patterns.length; i += 1) {
//     if (myObj[patterns[i]] && myObj[patterns[i]] !== strArr[i]) return false;
//     else myObj[patterns[i]] = strArr[i];
//   }

//   if (new Set(Object.values(myObj)).size !== Object.values(myObj).length) return false;

//   return true;
// }

// const output = solution(pattern, str);

// console.log(output);
