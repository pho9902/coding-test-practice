const input = "4 안녕";

const solution = string => {
  const [num, str] = string.split(" ");
  let answer = "";

  for (let i = 0; i < parseInt(num); i++) {
    answer += str;
  }

  return answer;
};

console.log(solution(input));
