const LikeCount = {
  MIN: 15,
  MAX: 200
};

const CommentCount = {
  MIN: 1,
  MAX: 9
};

const OriginalityCount = {
  MIN: 0,
  MAX: 100
};

const DESCRIPTIONS_COUNT = 25;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (str, length) => str.length <= length;
checkStringLength('Пример строки', 35);

export { LikeCount, CommentCount, OriginalityCount, getRandomPositiveInteger, DESCRIPTIONS_COUNT };
