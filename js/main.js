const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //Максимум и минимум включаются
};
getRandomInt(1, 10);

const isMaxLengthFit = (str, maxLength) => (str.length <= maxLength);
isMaxLengthFit('qwe', 5);
