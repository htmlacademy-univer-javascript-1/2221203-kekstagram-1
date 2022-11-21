const likesCount = {
  Min: 15,
  Max: 200
};

const commentsCount = {
  Min: 1,
  Max: 9
};

const originalityPercentsCount = {
  Min: 0,
  Max: 100
};

const descriptionsCount = 25;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const checkStringLength = (str, length) => str.length <= length;

export { likesCount, commentsCount, originalityPercentsCount, getRandomPositiveInteger, descriptionsCount }
