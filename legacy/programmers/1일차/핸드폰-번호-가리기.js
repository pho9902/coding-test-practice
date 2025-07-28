function solution(phone_number) {
  let answer = "";
  const len = phone_number.length;
  for (let i = 0; i < len - 4; i++) answer += "*";
  return answer + phone_number.slice(len - 4, len);
}

console.log(solution("01034551234"));
