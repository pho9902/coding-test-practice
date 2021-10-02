function solution(price, money, count) {
  for (let i = 1; i <= count; i += 1) money -= price * i;
  return money > 0 ? 0 : -money;
}

console.log(solution(3, 20, 4));
// output 10
