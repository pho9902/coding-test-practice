function solution(s) {
  const sArr = s.split("");
  for (let i = 0; i < sArr.length - 1; i++) {
    if (sArr[i] === sArr[i + 1]) {
      sArr.splice(i, 2);
      i = -1;
    }
  }
  return sArr.length <= 0 ? 1 : 0;
}
// 효율성 검사 실패뜸 다시해야댐
