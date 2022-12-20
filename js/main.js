import { initFilters } from './filter.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { renderUploadForm } from './user-form.js';

getData(initFilters, showAlert);
renderUploadForm();
