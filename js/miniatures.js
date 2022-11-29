const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');

const getPictures = (miniatures) => {
  miniatures.forEach(({url, likes, comments}) => {
    const picturesElement = picturesTemplate.cloneNode(true);
    const picturesElementInfo = picturesElement.querySelector('.picture__info');
    picturesElement.querySelector('.picture__img').src = url;
    picturesElementInfo.querySelector('.picture__likes').textContent = likes;
    picturesElementInfo.querySelector('.picture__comments').textContent = comments.length;
    picturesFragment.append(picturesElement);
  });
  pictures.append(picturesFragment);
  return pictures;
}

export { getPictures };
