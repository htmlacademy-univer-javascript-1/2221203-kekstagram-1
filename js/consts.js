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

const DEFAULT_COUNT_COMENTS = 5;
const STEP_COUNT_COMMENTS = 5;
const SCALE_STEP = 25;

const Effects = {
  'none': { name: 'none', filter: '', unit: '',
    options: {range: {min: 0, max: 100}, step: 1, start: 100},
  },
  'chrome': {name: 'chrome', filter: 'grayscale', unit: '',
    options: { range: {min: 0, max: 1}, step: 0.1, start: 1},
  },
  'sepia': { name: 'sepia', filter: 'sepia', unit: '',
    options: { range: {min: 0, max: 1}, step: 0.1, start: 1},
  },
  'marvin': { name: 'marvin', filter: 'invert', unit: '%',
    options: {range: {min: 0, max: 100}, step: 1, start: 100},
  },
  'phobos': {name: 'phobos', filter: 'blur', unit: 'px',
    options: {range: {min: 0, max: 3}, step: 0.1, start: 3},
  },
  'heat': {name: 'heat', filter: 'brightness', unit: '',
    options: {range: {min: 1, max: 3}, step: 0.1, start: 3},
  }
};

const ScaleRange = {
  Min: 25,
  Max: 100
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

export{MAX_COUNT_PHOTOS, CountLike, MAX_COMMENT_LENGTH, MaxHashtag, ErrorMessage, STEP_COUNT_COMMENTS, DEFAULT_COUNT_COMENTS, Effects, SCALE_STEP, ScaleRange};
