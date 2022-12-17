const MAX_COUNT_PHOTOS = 25;

const CountLike = {
  MIN: 15,
  MAX: 200
};

const MAX_COMMENT_LENGTH = 140;

const MaxHashtag = {
  LENGTH: 20,
  COUNT: 5
};

const ErrorMessage = {
  SPACE_MISSES: 'Хэш-теги должны разделяться пробелами',
  SHARP_START: 'Хэш-тег должен начинаться с символа # (решётка)',
  REPEAT_HASHTAG: 'Один и тот же хэш-тег не может быть использован дважды',
  HASHTAG_MAX_LENTH: `Максимальная длина одного хэш-тега ${MaxHashtag.LENGTH} символов, включая #`,
  HASHTAG_MAX_COUNT: `Нельзя указать больше ${MaxHashtag.COUNT} хэш-тегов`,
  UBNORMAL_SYMBOLS: 'Хэш-тег содержит недопустимые символы',
  COMMENT_MAX_LENGTH: `Максимальная длина комментария не может превышать ${MAX_COMMENT_LENGTH} символов`
};

export{MAX_COUNT_PHOTOS, CountLike, MAX_COMMENT_LENGTH, MaxHashtag, ErrorMessage};
