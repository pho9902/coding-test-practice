function solution(food) {
  const array = [];

  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < parseInt(food[i] / 2); j++) {
      array.push(i);
    }
  }

  return array.join("") + "0" + array.reverse().join("");
  // 이중 반복 외의 다른 방법 찾아보기
}
