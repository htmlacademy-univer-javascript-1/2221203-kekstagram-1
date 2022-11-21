import { likesCount, commentsCount, originalityPercentsCount, getRandomPositiveInteger } from './util.js';

const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = ['Владислав', 'Даниил', 'Мария', 'Ирина', 'Олег', 'Айдимир'];

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

export{ createDescription };
