// 최대공약수 => 유클리드호제법
// 최소공배수 => 두수의곱 / 최대공약수
const gcd = (a, b) => {
  let temp;
  while (b > 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const solution = arr => {
  return arr.reduce((acc, cur) => {
    return (acc * cur) / gcd(acc, cur);
  });
};
