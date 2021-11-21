// 입력 문자열중 대문자 소문자 갯수중 큰거에서 작은거 뺀값 리턴

const solution = string => {
  let lower = 0;
  let upper = 0;
  for (let el of string) {
    if (el === el.toUpperCase()) upper += 1;
    else lower += 1;
  }
  return lower - upper < 0 ? (lower - upper) * -1 : lower - upper;
};

const string = "asdfASDFASDFASDFAsfdASsdfADF";

console.log(solution(string));
