const solution = array => {
  const answer = [];
  let j = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= j + 1) {
      answer.push(
        array[i].substr(0, j) + "!" + array[i].substr(j + 1, array[i].length)
      );
      j += 1;
    } else {
      j = 0;
      answer.push(
        array[i].substr(0, j) + "!" + array[i].substr(j + 1, array[i].length)
      );
      j += 1;
    }
  }

  return answer;
};

const array = ["hi", "park", "hyunwoo", "woo", "hi", "hi", "hi", "zzzzz"];
console.log(solution(array));
