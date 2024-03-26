export const randomSelector = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

export const createRange = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = 0; i < end; i += step) {
    output.push(i);
  }
  return output;
};
