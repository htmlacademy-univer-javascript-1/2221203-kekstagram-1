import { DEFAULT_COUNT_COMENTS, STEP_COUNT_COMMENTS } from './consts.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const cancelButton = bigPicture.querySelector('.cancel');
const commentsList = document.querySelector('.social__comments');
const commentsCounter = document.querySelector('.social__comment-count');
const commentsLoaderBtn = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');

let actualComments = [];
let defaultCountComments = DEFAULT_COUNT_COMENTS;

const commentTemplate = ({avatar, message, name}) => `<li class="social__comment">
  <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
  <p class="social__text">${message}</p>
</li>`;

const getCounterCommentsTemplate = (commentsCount) => `${Math.min(defaultCountComments, commentsCount)} из <span class="comments-count">${commentsCount}</span> комментариев`;

const getCounterComments = () => {
  commentsCounter.innerHTML='';
  commentsCounter.insertAdjacentHTML('afterbegin', getCounterCommentsTemplate(actualComments.length));
};

const renderComments = () => {
  getCounterComments();
  commentsList.innerHTML = '';
  const commentsTemplate = actualComments.slice(0, defaultCountComments).map((comment) => commentTemplate(comment)).join('');
  commentsList.insertAdjacentHTML('afterbegin', commentsTemplate);

  if (defaultCountComments >= actualComments.length) {
    commentsLoaderBtn.removeEventListener('click', onCommentsLoaderBtn);
    commentsLoaderBtn.classList.add('hidden');
  }
};

function onCommentsLoaderBtn() {
  defaultCountComments += STEP_COUNT_COMMENTS;
  renderComments();
}

const initComments = ({comments}) => {
  actualComments = comments.slice();
  commentsList.innerHTML = '';
  renderComments();
  commentsLoaderBtn.addEventListener('click', onCommentsLoaderBtn);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPictureEscKeydown);
  cancelButton.removeEventListener('click', onPictureCancelButton);
  commentsLoaderBtn.classList.remove('hidden');
  commentsLoaderBtn.removeEventListener('click', onCommentsLoaderBtn);
  defaultCountComments = DEFAULT_COUNT_COMENTS;
};

function onPictureEscKeydown(evt) {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
}

function onPictureCancelButton() {
  closeBigPicture();
}

const openBigPicture = (photo) => {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPictureImg.setAttribute('src', photo.url);
  bigPictureDescription.textContent = photo.description;
  bigPictureLikesCount.textContent = photo.likes;
  initComments(photo);
  cancelButton.addEventListener('click', onPictureCancelButton);
  window.addEventListener('keydown', onPictureEscKeydown);
};

export { openBigPicture };
