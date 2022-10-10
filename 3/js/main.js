const messages = ['Всё отлично!',
                  'В целом всё неплохо. Но не всё.',
                  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
                  'В конце концов это просто непрофессионально.',
                  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
                  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
                  'Лица у людей на фотке перекошены, как будто их избивают.',
                  'Как можно было поймать такой неудачный момент?!'];

const names = ['Владислав', 'Даниил', 'Мария', 'Ирина', 'Олег', 'Айдимир'];

const likesCount = {
  Min: 15,
  Max: 200
};

const commentsCount = {
  Min: 1,
  Max: 10
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

const createComments = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: messages[getRandomPositiveInteger(0, messages.length - 1)],
  name: names[getRandomPositiveInteger(0, names.length - 1)]
});

const createDescription = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: `${getRandomPositiveInteger(originalityPercentsCount.Min, originalityPercentsCount.Max)}% originality`,
  likes: getRandomPositiveInteger(likesCount.Min, likesCount.Max),
  comments: Array.from({length: getRandomPositiveInteger(commentsCount.Min, commentsCount.Max)}).map((value, index) => createComments(index + 1))
});

console.log(Array.from({length: descriptionsCount}).map((value, index) => createDescription(index + 1)));
