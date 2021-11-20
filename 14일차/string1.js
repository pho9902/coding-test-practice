// 입력 문자열안에 숫자들 총합
//난이도 하 => 구분없이 무조건 10 이하 수 ex) "sadf1sff34asdf" => 8
//난이도 상 => 자릿수 구분 있음 ex) "sadf1sff34asdf" => 35

//하
const easy = string => {
  let answer = 0;
  string.split("").map(el => {
    if (el < 10) answer += parseInt(el);
  });
  return answer;
};

//상
const hard = string => {
  const answer = [];
  let result = 0;
  for (let el of string.split("")) {
    if (!isNaN(el)) answer.push(el);
    else answer.push(" ");
  }
  answer
    .join("")
    .split(" ")
    .map(el => {
      if (el !== "") result += parseInt(el);
    });
  return result;
};

const string1 = "112a3a3sdf12agwet134sdf2t13";

console.log(hard(string1));
