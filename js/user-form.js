const file = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

const renderUploadForm = () => {
    file.addEventListener('change', function() {
    uploadOverlay.classList.remove('hidden')
    body.classList.add('modal-open')});
};
export{ renderUploadForm }
