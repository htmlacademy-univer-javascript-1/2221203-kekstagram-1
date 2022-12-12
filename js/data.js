import { LikeCount, CommentCount, OriginalityCount, getRandomPositiveInteger, DESCRIPTIONS_COUNT } from './util.js';

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Владислав', 'Даниил', 'Мария', 'Ирина', 'Олег', 'Айдимир'];

const createComments = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)]
});

const createDescription = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: `${getRandomPositiveInteger(OriginalityCount.MIN, OriginalityCount.MAX)}% originality`,
  likes: getRandomPositiveInteger(LikeCount.MIN, LikeCount.MAX),
  comments: Array.from({length: getRandomPositiveInteger(CommentCount.MIN, CommentCount.MAX)}).map((value, index) => createComments(index + 1))
});

const getPhotos = () => Array.from({length: DESCRIPTIONS_COUNT}).map((value, index) => createDescription(index + 1));

export{ getPhotos };
