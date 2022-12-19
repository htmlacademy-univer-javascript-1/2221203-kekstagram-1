import { ALERT_SHOW_TIME } from "./consts.js";

const LikeCount = {
  MIN: 15,
  MAX: 200
};

const CommentCount = {
  MIN: 1,
  MAX: 9
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

const isEscKey = (evt) => evt.key === 'Escape';

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = 'Не удалось загрузить фотографии';
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { LikeCount, CommentCount, getRandomPositiveInteger, DESCRIPTIONS_COUNT, isEscKey, checkStringLength, showAlert };
