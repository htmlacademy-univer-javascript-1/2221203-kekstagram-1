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


const openBigPicture = (picture) => {
  picture.forEach(element => {
    element.addEventListener('click', () => {
      body.classList.add('modal-open');
      renderBigPicture(element, bigPictureImg, bigPictureLikesCount, bigPictureCommentsCount, bigPictureDescription);
      commentsCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
      commentsList.innerHTML = '';
      getComments(getPhotos, bigPictureImg.srcset, commentsList, commentsItem);
    });
  });

  cancelButton.forEach(element => {
    element.addEventListener('click', () => {
      closeBigPicture(bigPicture, body);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
      closeBigPicture(bigPicture, body);
    }
  })
};

const closeBigPicture = (picture, body) => {
  picture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const renderBigPicture = (element, bigPictureImg, bigPictureLikesCount, bigPictureCommentsCount, bigPictureDescription) => {
  const picture = element.querySelector('img');
  const likes = element.querySelector('.picture__likes')
  const comments = element.querySelector('.picture__comments');
  bigPictureImg.src = picture.src;
  bigPictureImg.srcset = picture.srcset;
  bigPictureLikesCount.textContent = likes.textContent;
  bigPictureCommentsCount.textContent = comments.textContent;
  bigPictureDescription.textContent = getDescription(getPhotos, bigPictureImg.srcset);
  bigPicture.classList.remove('hidden');
};

const getDescription = (photos, url) => {
  let result = null;
  for (let i = 0; i < photos.length; i++) {
    if (photos[i].url == url) {
      result = photos[i].description;
      return result;
    }
  }
  return;
};

const getComments = (photos, url, commentsList, commentsItem) => {
  for (let i = 0; i < photos.length; i++) {
    if (photos[i].url == url) {
      renderComments(photos[i].comments, commentsList, commentsItem);
      break;
    }
  }
}

const renderComments = (comment, commentsList, commentsItem) => {
  for (let i = 0; i < comment.length; i++) {
    const comments = commentsItem.cloneNode(true);
    const commentsImg = comments.querySelector('.social__picture');
    const commentsText = comments.querySelector('.social__text');
    commentsImg.src = comment[i].avatar;
    commentsImg.alt = comment[i].name;
    commentsText.textContent = comment[i].message;
    commentsList.appendChild(comments);
  }
};

export {openBigPicture};
