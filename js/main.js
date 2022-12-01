import { getPhotos } from './data.js';
import { getPictures } from './miniatures.js';
import { openBigPicture } from './big-picture.js';


const miniatures = getPhotos;
getPictures(miniatures);
const pictures = document.querySelectorAll('.picture');
openBigPicture(pictures);
