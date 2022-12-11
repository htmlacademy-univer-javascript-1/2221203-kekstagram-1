import { getPhotos } from './data.js';
import { getPictures } from './thumbnails.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const cancelButton = bigPicture.querySelector('.cancel');
const commentsList = document.querySelector('.social__comments');
const commentsItem = commentsList.querySelector('.social__comment').cloneNode(true);
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const thumbnails = getPhotos();

const renderComments = (comments, list, item) => {
  for (let i = 0; i < comments.length; i++) {
    const comment = item.cloneNode(true);
    const commentsImg = comment.querySelector('.social__picture');
    const commentsText = comment.querySelector('.social__text');
    commentsImg.src = comments[i].avatar;
    commentsImg.alt = comments[i].name;
    commentsText.textContent = comments[i].message;
    list.appendChild(comment);
  }
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  closeButton.removeEventListener('click', onPictureCancelButton);
  document.removeEventListener('keydown', onPictureEscKeydown);
};

const onPictureEscKeydown = (evt) => {
  if (evt.key === "Escape") {
    closeBigPicture();
  }
};

const onPictureCancelButton = () => {
  closeBigPicture();
}

const getPictureData = (element, fullScreenImg, fullScreenLikesCount, fullScreenCommentsCount, fullScreenDescription) => {
  const picture = element.querySelector('img');
  const likes = element.querySelector('.picture__likes');
  const comments = element.querySelector('.picture__comments');
  fullScreenImg.src = picture.src;
  fullScreenImg.srcset = picture.srcset;
  fullScreenLikesCount.textContent = likes.textContent;
  fullScreenCommentsCount.textContent = comments.textContent;
  fullScreenDescription.textContent = thumbnails[element.dataset.id - 1].description;
  bigPicture.classList.remove('hidden');
};

const onClickBigPicture = (picture) => {
  body.classList.add('modal-open');
  getPictureData(picture, bigPictureImg, bigPictureLikesCount, bigPictureCommentsCount, bigPictureDescription);
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  commentsList.innerHTML = '';
  renderComments(thumbnails[picture.dataset.id - 1].comments, commentsList, commentsItem);
  cancelButton.addEventListener('click', onPictureCancelButton);
  document.addEventListener('keydown', onPictureEscKeydown);
};

const openBigPicture = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => {
    picture.addEventListener('click', () => onClickBigPicture(picture));
  });
};

getPictures(thumbnails);
export { openBigPicture };
