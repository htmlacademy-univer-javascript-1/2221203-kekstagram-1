import { bringPicturesLife } from './thumbnails.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { renderUploadForm } from './user-form.js';

getData(bringPicturesLife, showAlert);
renderUploadForm();
