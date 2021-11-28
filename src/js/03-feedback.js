import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const localStorageValues = {
  email: '',
  message: '',
};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const onFormSubmit = e => {
  e.preventDefault();
  if (localStorageValues.email === '' || localStorageValues.message === '') {
    return alert('Please enter a valid email address');
  }
  if (localStorage.getItem(STORAGE_KEY)) {
    console.log(localStorage.getItem(STORAGE_KEY));
  }
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

const onEmailInput = e => {
  localStorageValues.email = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageValues));
};

const onMessageInput = e => {
  localStorageValues.message = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageValues));
};

const saveInformation = () => {
  let savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    localStorageValues.email = savedMessage.email;
    localStorageValues.message = savedMessage.message;
    refs.email.value = localStorageValues.email;
    refs.textarea.value = localStorageValues.message;
  }
};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onMessageInput, 500));
saveInformation();
