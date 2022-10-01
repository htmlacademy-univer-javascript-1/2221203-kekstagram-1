const get_random_number = (from, before) => {
  if (before < from) return 'Ошибка ввода диапазона';
  return Math.floor(Math.random() * (before - from + 1)) + from;
}

const isRightLength = (str, maxLength) => str.length <= maxLength;
