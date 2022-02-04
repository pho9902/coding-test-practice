function solution(n, arr1, arr2) {
  return arr1
    .map((el, idx) => {
      return setArr(el, n).map((e, i) => +e + +setArr(arr2[idx], n)[i]);
    })
    .map(array => array.join("").replace(/0/g, " ").replace(/[1-2]/g, "#"));
}

function setArr(num, n) {
  return num.toString(2).padStart(n, 0).split("");
}
