import throttle from 'lodash.throttle';
// ----------------------------------------------------

const form = document.querySelector('.feedback-form');
const inputEmail = form.elements.email;
const inputMessage = form.elements.message;
// ----------------------------------------------------

const dataFromLocalStorage = localStorage.getItem('feedback-form-state');
if (dataFromLocalStorage) {
  const dataFromLocalStorageObject = JSON.parse(dataFromLocalStorage);

  inputEmail.value = dataFromLocalStorageObject.email;
  inputMessage.value = dataFromLocalStorageObject.message;
}

// ----------------------------------------------------
const throttledCallbackFc = throttle(() => {
  const personalData = {
    email: inputEmail.value,
    message: inputMessage.value,
  };
  const personalDataString = JSON.stringify(personalData);
  localStorage.setItem('feedback-form-state', personalDataString);
}, 500);
const callbackFc = function (_event) {
  throttledCallbackFc();
};

// ----------------------------------------------------

form.addEventListener('input', callbackFc);
form.addEventListener('submit', formValidate);

// ----------------------------------------------------

function formValidate(event) {
  event.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('some fields are empty');
  } else {
    createMessage();
  }
}

function createMessage(event) {
  const newMessage = {
    [form.elements.email.name]: form.elements.email.value,
    [form.elements.message.name]: form.elements.message.value,
  };
  console.log(newMessage);
  form.reset();
  localStorage.clear();
}
