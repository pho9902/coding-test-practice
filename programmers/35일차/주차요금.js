function solution(fees, records) {
  const obj = {};

  for (let record of records) {
    const data = record.split(" ");
    if (!obj[data[1]]) obj[data[1]] = [data[0]];
    else obj[data[1]].push(data[0]);
  }

  const cars = Object.keys(obj)
    .map(v => +v)
    .sort()
    .map(x => {
      switch (x.toString().length) {
        case 1:
          return "000" + x.toString();
        case 2:
          return "00" + x.toString();
        case 3:
          return "0" + x.toString();
        default:
          return x.toString();
      }
    });
  const carObj = {};
  cars.forEach(els => (carObj[els] = 0));

  for (let el in obj) {
    for (let i = 0; i < obj[el].length; i += 2) {
      if (obj[el][i + 1] !== undefined) {
        carObj[el] +=
          parseInt(obj[el][i + 1].split(":")[0]) * 60 +
          parseInt(obj[el][i + 1].split(":")[1]) -
          (parseInt(obj[el][i].split(":")[0]) * 60 +
            parseInt(obj[el][i].split(":")[1]));
      } else {
        //1439 23:59
        carObj[el] +=
          1439 -
          (parseInt(obj[el][i].split(":")[0]) * 60 +
            parseInt(obj[el][i].split(":")[1]));
      }
    }
  }
  console.log(carObj);

  return cars.map(car => {
    return cal(carObj[car], ...fees);
  });
}

function cal(time, basicTime, basicFee, perMin, feePerMin) {
  if (time - basicTime <= 0) return basicFee;
  let useTime = Math.ceil((time - basicTime) / perMin);
  // if ((time - basicTime) % perMin) return basicFee + (useTime + 1) * feePerMin;
  return basicFee + useTime * feePerMin;
}
