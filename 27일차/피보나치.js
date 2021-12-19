function solution(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) arr.push((arr[i - 2] + arr[i - 1]) % 1234567);
  return arr[n];
}

// function solution(n) {
//   const answer = Array(n).fill(0);

//   return n < 2
//     ? n
//     : answer.map((el, idx, origin) => {
//         console.log(origin);
//         return idx < 2 ? idx : (origin[idx - 1] + origin[idx - 2]) % 1234567;
//       });
// } ==> 좀더 고민하면 될듯

console.log(solution(3));
// function solution(n) {
//   return n < 2 ? n : (solution(n - 1) + solution(n - 2)) % 1234567;
// }
// (a + b) % c === (a % c + b % c) % c 라는데 먼소린지 한개도 모르겠다
