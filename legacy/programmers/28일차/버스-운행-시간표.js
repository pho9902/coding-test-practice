const timeTable = [
  {
    number: "50",
    timetable: {
      weekend: [
        { name: "정류장 a", arrive: "09:10" },
        { name: "정류장 B", arrive: "09:35" },
        { name: "정류장 E", arrive: "09:50" },
        { name: "정류장 f", arrive: "10:20" },
        { name: "정류장 G", arrive: "10:30" },
      ],
      weekday: [],
    },
  },
  {
    number: "1-1",
    timetable: {
      weekday: [
        { name: "정류장 a", arrive: "22:10" },
        { name: "정류장 B", arrive: "22:15" },
        { name: "정류장 E", arrive: "22:20" },
        { name: "정류장 f", arrive: "22:30" },
        { name: "정류장 G", arrive: "22:40" },
      ],
      weekend: [],
    },
  },
];

const s = "50 1-1 30";

const solution = s => {
  const input = s.split(" ");

  const now = new Date();
  const today = {
    day: now.getDay(),
    hour: now.getHours(),
    minute: now.getMinutes(),
  };

  const numbers = [];
  for (let el of timeTable) numbers.push(el.number);

  return input.map(bus => {
    return numbers.includes(bus)
      ? isDriving(bus, today)
      : `${bus}번 버스는 존재하지 않습니다.`;
  });
};

const isDriving = (bus, today) => {
  const index = timeTable.findIndex(v => v.number === bus);
  const table =
    today.day === 0 || today.day === 6
      ? timeTable[index].timetable.weekend
      : timeTable[index].timetable.weekday;
  let result = "";

  if (table.length === 0) return `${bus}번 버스는 운행하지 않습니다.`;

  table.forEach(el => {
    if (result.length > 0) return false;
    el.arrive < `${today.hour}:${today.minute}`
      ? null
      : (result += `${bus}번 버스는 ${el.name}를 향해 운행하고 있습니다.`);
  });
  return result === "" ? `${bus}번 버스는 운행이 종료되었습니다.` : result;
};

console.log(solution(s));
