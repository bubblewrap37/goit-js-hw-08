import throttle from 'lodash.throttle';
// ----------------------------------------------------

const form = document.querySelector('.feedback-form');
// ----------------------------------------------------

const dataFromLocalStorage = localStorage.getItem('feedback-form-state');
const dataFromLocalStorageObject = JSON.parse(dataFromLocalStorage);
if (dataFromLocalStorage) {
  form.elements.email.value = dataFromLocalStorageObject.email;
  form.elements.message.value = dataFromLocalStorageObject.message;
}

// ----------------------------------------------------

const callbackFc = throttle(function (event) {
  const personalData = {
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
  };
  const personalDataString = JSON.stringify(personalData);
  localStorage.setItem('feedback-form-state', personalDataString);
}, 500);

// ----------------------------------------------------

form.addEventListener('input', callbackFc);
form.addEventListener('submit', createMessage);

// ----------------------------------------------------

function createMessage(event) {
  event.preventDefault();
  const newMessage = {
    [form.elements.email.name]: form.elements.email.value,
    [form.elements.message.name]: form.elements.message.value,
  };
  console.log(newMessage);
  form.reset();
  localStorage.clear();
}
