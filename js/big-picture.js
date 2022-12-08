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

const getDescription = (photos, url) => {
  let result = null;
  for (let i = 0; i < photos.length; i++) {
    if (photos[i].url === url) {
      result = photos[i].description;
      return result;
    }
  }
};

const renderComments = (comment, list, item) => {
  for (let i = 0; i < comment.length; i++) {
    const comments = item.cloneNode(true);
    const commentsImg = comments.querySelector('.social__picture');
    const commentsText = comments.querySelector('.social__text');
    commentsImg.src = comment[i].avatar;
    commentsImg.alt = comment[i].name;
    commentsText.textContent = comment[i].message;
    list.appendChild(comments);
  }
};

const getComments = (photos, id, list, item) => {
  renderComments(photos[id - 1].comments, list, item);
};

const closeBigPicture = (picture, page) => {
  picture.classList.add('hidden');
  page.classList.remove('modal-open');
};

const closeBigPictureByEsc = (evt) => {
  if (evt.keyCode === 27) {
    closeBigPicture(bigPicture, body);
  }
};

const getPictureData = (element, fullScreenImg, fullScreenLikesCount, fullScreenCommentsCount, fullScreenDescription) => {
  const picture = element.querySelector('img');
  const likes = element.querySelector('.picture__likes');
  const comments = element.querySelector('.picture__comments');
  fullScreenImg.src = picture.src;
  fullScreenImg.srcset = picture.srcset;
  fullScreenLikesCount.textContent = likes.textContent;
  fullScreenCommentsCount.textContent = comments.textContent;
  fullScreenDescription.textContent = getDescription(thumbnails, bigPictureImg.srcset);
  bigPicture.classList.remove('hidden');
};

const renderBigPicture = (picture) => {
  const pictureId = picture.querySelector('.picture__id').textContent;
  picture.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.add('modal-open');
    getPictureData(picture, bigPictureImg, bigPictureLikesCount, bigPictureCommentsCount, bigPictureDescription);
    commentsCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    commentsList.innerHTML = '';
    getComments(thumbnails, pictureId, commentsList, commentsItem);
  });
};

const openBigPicture = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => {
    renderBigPicture(picture);
  });

  cancelButton.addEventListener('click', () => closeBigPicture(bigPicture, body));
  document.addEventListener('keydown', closeBigPictureByEsc);
};

getPictures(thumbnails);

export {openBigPicture};
