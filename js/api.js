const URL_POST = 'https://26.javascript.pages.academy/kekstagram';
const URL_GET = 'https://26.javascript.pages.academy/kekstagram/data';

const getData = (onSuccess, onFail) => {
  fetch(URL_GET)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      else {
        onFail();
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    URL_POST,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
