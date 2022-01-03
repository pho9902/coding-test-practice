function solution(numbers) {
  return numbers.map(number => {
    const binNumber = number.toString(2);
    return binNumber[binNumber.length - 1] === "0"
      ? number + 1
      : notZero("0" + binNumber);
  });
}

const notZero = bin => {
  const array = bin.split("");
  const index = array.lastIndexOf("0");
  array[index] = "1";
  array[index + 1] = "0";
  return parseInt(array.join(""), 2);
};
