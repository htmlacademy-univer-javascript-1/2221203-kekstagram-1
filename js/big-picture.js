import { getPhotos } from './data.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const cancelButton = document.querySelectorAll('.cancel');
const commentsList = document.querySelector('.social__comments');
const commentsItem = commentsList.querySelector('.social__comment').cloneNode(true);
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');

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

const getComments = (photos, url, list, item) => {
  for (let i = 0; i < photos.length; i++) {
    if (photos[i].url === url) {
      renderComments(photos[i].comments, list, item);
      break;
    }
  }
};

const closeBigPicture = (picture, page) => {
  picture.classList.add('hidden');
  page.classList.remove('modal-open');
};

const renderBigPicture = (element, fullScreenImg, fullScreenLikesCount, fullScreenCommentsCount, fullScreenDescription) => {
  const picture = element.querySelector('img');
  const likes = element.querySelector('.picture__likes');
  const comments = element.querySelector('.picture__comments');
  fullScreenImg.src = picture.src;
  fullScreenImg.srcset = picture.srcset;
  fullScreenLikesCount.textContent = likes.textContent;
  fullScreenCommentsCount.textContent = comments.textContent;
  fullScreenDescription.textContent = getDescription(getPhotos, bigPictureImg.srcset);
  bigPicture.classList.remove('hidden');
};

const openBigPicture = (picture) => {
  picture.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.add('modal-open');
      renderBigPicture(element, bigPictureImg, bigPictureLikesCount, bigPictureCommentsCount, bigPictureDescription);
      commentsCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
      commentsList.innerHTML = '';
      getComments(getPhotos, bigPictureImg.srcset, commentsList, commentsItem);
    });
  });

  cancelButton.forEach((element) => {
    element.addEventListener('click', closeBigPicture(bigPicture, body));
  });

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      closeBigPicture(bigPicture, body);
    }
  });
};

export {openBigPicture};
