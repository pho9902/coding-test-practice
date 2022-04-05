function solution(price : number, money : number, count : number) : number {
    for (let i : number = 1; i <= count; i++) money -= price * i;
    return money > 0 ? 0 : -money;
  }
  
  console.log(solution(3, 20, 4));
  // output 10
  