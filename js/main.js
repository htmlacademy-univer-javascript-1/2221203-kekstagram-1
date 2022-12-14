import { getPhotos } from './data.js';
import { getPictures} from './miniatures.js';
import { renderUploadForm } from './user-form.js'

const miniatures = getPhotos();
getPictures(miniatures);
renderUploadForm();
