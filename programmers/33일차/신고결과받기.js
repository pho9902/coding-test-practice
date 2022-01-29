function solution(id_list, reports, k) {
  const obj = {};
  const answer = id_list.map(_ => 0);

  for (let report of reports) {
    const data = report.split(" ");
    if (obj[data[0]]) {
      if (obj[data[0]].indexOf(data[1]) === -1) obj[data[0]].push(data[1]);
    } else obj[data[0]] = [data[1]];
  }

  const arr = Object.values(obj).flatMap(a => a);

  for (let id of id_list) {
    if (arr.filter(e => e === id).length >= k) {
      for (let el in obj) {
        if (obj[el].find(x => x === id)) {
          answer[id_list.indexOf(el)] += 1;
        }
      }
    }
  }
  return answer;
}
