// function solution(sizes) {
//     const bigger = [];
//     const smaller = [];

//     sizes.forEach(el => {
//         bigger.push(Math.max(...el))
//         smaller.push(Math.min(...el))
//     })

//     return Math.max(...smaller) * Math.max(...bigger)

// }

function solution(sizes) {
  let bigger = 0;
  let smaller = 0;
  sizes.forEach(el => {
    if (bigger <= Math.max(...el)) bigger = Math.max(...el);
    if (smaller <= Math.min(...el)) smaller = Math.min(...el);
  });
  return bigger * smaller;
}
