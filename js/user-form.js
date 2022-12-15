import { isEscKey } from './util.js';
import { changeDisableStateSubmitBtn, commentHandler, hashtagsHandler, pristine, error } from './validate.js';

const file = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const overlayCloseButton = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const comments = form.querySelector('.text__description');
const hashtags = form.querySelector('.text__hashtags');

const closeOverlay = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onOverlayEscKeydown);
  form.reset();
};

function onOverlayEscKeydown(evt) {
  if (isEscKey(evt)) {
      closeOverlay();
  }
};

const onOverlayCloseButton = () => {
  closeOverlay();
};

const onImgUploadFieldChange = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onOverlayEscKeydown);
  overlayCloseButton.addEventListener('click', onOverlayCloseButton);
};

const renderUploadForm = () => {
  file.addEventListener('change', onImgUploadFieldChange);
  hashtags.addEventListener('input', changeDisableStateSubmitBtn);
  comments.addEventListener('input', changeDisableStateSubmitBtn);
  pristine.addValidator(hashtags, hashtagsHandler, error);
  pristine.addValidator(comments, commentHandler, error);
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      pristine.validate();
  });
};

export{ renderUploadForm };
