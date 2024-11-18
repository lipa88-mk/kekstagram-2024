export const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomFromArray = (arr) => {
  const index = getRandomPositiveInteger(0, arr.length-1);
  return arr[index];
};

export const isMaxLengthFit = (str, maxLength) => (str.length <= maxLength);
