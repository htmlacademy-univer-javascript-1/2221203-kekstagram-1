import { LikeCount, CommentCount, getRandomPositiveInteger, DESCRIPTIONS_COUNT } from './util.js';

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Владислав', 'Даниил', 'Мария', 'Ирина', 'Олег', 'Айдимир'];

const COMMENTS = ['Я в своем познании настолько преисполнился',
  'Кто любит маму лайк!',
  'Я безумно хочу пиццу',
  'Восстанавливаю актив',
  'Тут должна была быть подпись',
  'Тут могла бы быть ваша реклама',
  '#яблогер',
  'Тест моего нового телефона Xiaomi Ultra Mega super 14 pro 128 GB 6G NFC 343MP'
];

const createComments = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)]
});

const createDescription = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: COMMENTS[getRandomPositiveInteger(0, COMMENTS.length - 1)],
  likes: getRandomPositiveInteger(LikeCount.MIN, LikeCount.MAX),
  comments: Array.from({length: getRandomPositiveInteger(CommentCount.MIN, CommentCount.MAX)}).map((value, index) => createComments(index + 1))
});

const getPhotos = Array.from({length: DESCRIPTIONS_COUNT}).map((value, index) => createDescription(index + 1));

export{ getPhotos };
