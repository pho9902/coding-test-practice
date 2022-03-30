const input = [
  {
    name: "조상우",
    gender: "남자",
    age: 47,
    height: 181,
    weight: 85,
  },
  {
    name: "오일남",
    gender: "남자",
    age: 77,
    height: 175,
    weight: 65,
  },
  {
    name: "한미녀",
    gender: "여자",
    age: 45,
    height: 167,
    weight: 49,
  },
  {
    name: "압둘 알리",
    gender: "남자",
    age: 33,
    height: 172,
    weight: 78,
  },
  {
    name: "장덕수",
    gender: "남자",
    age: 44,
    height: 180,
    weight: 73,
  },
  {
    name: "강새벽",
    gender: "여자",
    age: 27,
    height: 176,
    weight: 54,
  },
];

// 남자 18세이상 60세 미만 체중 70 이상 키 170 이상
const solution = input => {
  const answer = [];
  for (let el of input) {
    if (
      el.gender === "남자" &&
      el.age < 60 &&
      el.age >= 18 &&
      el.height > 170 &&
      el.weight >= 70
    )
      answer.push(el.name);
  }

  return answer;
};

console.log(solution(input));
