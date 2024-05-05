const form = document.querySelector('.feedback-form');
// ----------------------------------------------------

const dataFromLocalStorage = localStorage.getItem('feedback-form-state');
const dataFromLocalStorageObject = JSON.parse(dataFromLocalStorage);
if (dataFromLocalStorage) {
  form.elements.email.value = dataFromLocalStorageObject.email;
  form.elements.message.value = dataFromLocalStorageObject.message;
}

// ----------------------------------------------------

const callbackFc = function (event) {
  const personalData = {
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
  };
  const personalDataString = JSON.stringify(personalData);
  localStorage.setItem('feedback-form-state', personalDataString);
};

// ----------------------------------------------------

form.addEventListener('input', callbackFc);
