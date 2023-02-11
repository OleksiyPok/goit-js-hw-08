import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailField = document.querySelector('.feedback-form input');
const messageField = document.querySelector('.feedback-form textarea');

const FORM_DATA = 'feedback-form-state';
let formData = {};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmitForm);

// getFromLocalStorage();

function onInput(e) {
  formData = JSON.parse(localStorage.getItem(FORM_DATA));
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_DATA, JSON.stringify(formData));
}

function getFromLocalStorage() {
  let data = JSON.parse(localStorage.getItem(FORM_DATA));
  if (!data) return;

  const { email, message } = data;
  if (email) emailField.value = email;
  if (message) messageField.value = message;
  return data;
}

function onSubmitForm(e) {
  e.preventDefault();
  localStorage.removeItem(FORM_DATA);
  e.target.reset();
}
