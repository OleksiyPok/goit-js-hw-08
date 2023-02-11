import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailField = document.querySelector('.feedback-form input');
const messageField = document.querySelector('.feedback-form textarea');

const FORM_DATA_KEY = 'feedback-form-state';
let formData = {};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmitForm);

restoreData();

function onInput(e) {
  formData = getFromLocalStorage();
  formData[e.target.name] = e.target.value;
  setToLocalStorage(FORM_DATA_KEY, formData);
}

function onSubmitForm(e) {
  e.preventDefault();
  localStorage.removeItem(FORM_DATA_KEY);
  e.target.reset();
}

function restoreData() {
  let data = getFromLocalStorage();
  setDataToFields(data);
}

function getFromLocalStorage() {
  let data = JSON.parse(localStorage.getItem(FORM_DATA_KEY));
  if (!data) return {};
  return data;
}

function setToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function setDataToFields(data) {
  const { email, message } = data;
  if (email) emailField.value = email;
  if (message) messageField.value = message;
}
