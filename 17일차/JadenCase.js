const solution = s => {
  const arr = s.split(" ");
  const answer = [];

  arr.map(el => {
    if (el.length <= 0) answer.push(el);
    else
      el[0] !== el[0].toUpperCase()
        ? answer.push(
            el[0].toUpperCase() + el.substr(1, el.length).toLowerCase()
          )
        : answer.push(el[0] + el.substr(1, el.length).toLowerCase());
  });

  return answer.join(" ");
};

console.log(solution("1 2 3  4 5ghh "));
