import { shuffleArray, comparePicturesByComments, debounce } from './util.js';
import { createThumbnails, removeThumbnails } from './thumbnails.js';
import { Filter, MAX_COUNT_RANDOM_PHOTO } from './consts.js';

const filtersContainer = document.querySelector('.img-filters');
const filtersForm = filtersContainer.querySelector('.img-filters__form');
let photos = [];

const getFiltredPhotos = (idFilter) => {
  let filteredPhotos = [];

  switch(idFilter) {
    case Filter.RANDOM:
      filteredPhotos =  shuffleArray(photos).slice(0, MAX_COUNT_RANDOM_PHOTO);
      break;
    case Filter.DISCUSSED:
      filteredPhotos = photos.slice().sort(comparePicturesByComments);
      break;
    default:
      filteredPhotos = photos.slice();
  }
  return filteredPhotos;
};

const onFiltersFormClick = (evt) => {
  const idFilter = evt.target.id;
  const active = document.querySelector('.img-filters__button--active');
  active.classList.remove('img-filters__button--active');
  removeThumbnails();
  createThumbnails(getFiltredPhotos(idFilter));
  filtersContainer.querySelector('.img-filters__button').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

const initFilters = (data) => {
  createThumbnails(data);
  photos = data.slice();
  filtersContainer.classList.remove('img-filters--inactive');
  filtersForm.addEventListener('click', debounce(onFiltersFormClick));
};

export { initFilters };
