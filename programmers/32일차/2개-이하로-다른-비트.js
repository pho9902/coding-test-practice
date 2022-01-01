function solution(numbers) {
  return numbers.map(el => {
    return el.toString(2)[el.toString(2).length - 1] === "0"
      ? el + 1
      : notZero("0" + el.toString(2));
  });
}

const notZero = bin => {
  const array = bin.split("");
  const index = array.lastIndexOf("0");
  array[index] = "1";
  array[index + 1] = "0";
  return parseInt(array.join(""), 2);
};
