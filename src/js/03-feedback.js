import throttle from 'lodash.throttle';
// ----------------------------------------------------

const form = document.querySelector('.feedback-form');
// ----------------------------------------------------

const dataFromLocalStorage = localStorage.getItem('feedback-form-state');
if (dataFromLocalStorage) {
  const dataFromLocalStorageObject = JSON.parse(dataFromLocalStorage);

  form.elements.email.value = dataFromLocalStorageObject.email;
  form.elements.message.value = dataFromLocalStorageObject.message;
}

// ----------------------------------------------------

const callbackFc = function (event) {
  const simpleEmail = event.currentTarget.elements.email;
  const simpleMessage = event.currentTarget.elements.message;
  throttle(() => {
    const personalData = {
      email: simpleEmail.value,
      message: simpleMessage.value,
    };
    const personalDataString = JSON.stringify(personalData);
    localStorage.setItem('feedback-form-state', personalDataString);
  }, 500);
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
