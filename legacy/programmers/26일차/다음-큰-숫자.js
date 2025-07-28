function solution(n) {
  const temp = returnTemp(n);

  while (1) {
    n += 1;
    if (returnTemp(n) === temp) return n;
  }
}

const returnTemp = n => {
  return n
    .toString(2)
    .split("")
    .reduce((acc, cur) => parseInt(acc) + parseInt(cur));
};
