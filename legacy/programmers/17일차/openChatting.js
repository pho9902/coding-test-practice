function solution(records) {
  const userInfo = {};

  for (let record of records) {
    const [action, uid, name] = record.split(" ");
    if (action === "Leave") continue;
    userInfo[uid] = name;
  }

  return records
    .map(record => {
      const [action, uid] = record.split(" ").splice(0, 2);
      if (action === "Enter") {
        return userInfo[uid] + "님이 들어왔습니다.";
      } else if (action === "Leave") {
        return userInfo[uid] + "님이 나갔습니다.";
      } else return "";
    })
    .filter(el => el !== "");
}

console.log(solution(["Enter uid132 박현우", "Change uid132 박"]));
