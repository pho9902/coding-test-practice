function solution(w, h) {
  return w * h - (w + h - func(w, h));
}

const func = (w, h) => {
  const na = w % h;
  if (na === 0) return h;
  return func(h, na);
};
