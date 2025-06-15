import './vendor/imask.js';
import {formSelect} from './select.js';

const MIN_LENGTH = 11;
const form = document.querySelector('.subscription');
const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
const inputText = document.getElementById('massage');
const inputSelect = document.querySelector('.subscription__select');
const inputCheckbox = document.getElementById('checkbox');
const decorationMark = document.querySelector('.subscription__decoration-mark');

document.addEventListener('DOMContentLoaded', () => {
  const maskOption = {
    mask: '+{7} (000) 000-00-00',
  };
  window.IMask(inputPhone, maskOption);
});

function showError(input, message) {
  input.setCustomValidity(message);
  input.reportValidity();
  input.classList.add('subscription__input--error');
}

function clearError(input) {
  input.setCustomValidity('');
  input.classList.remove('subscription__input--error.ss-main');
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let hasError = false;
  [inputName, inputPhone, inputText, inputSelect, inputCheckbox].forEach(clearError);

  if (inputName.value.trim() === '') {
    showError(inputName, 'Пожалуйста, заполните имя');
    hasError = true;
  }
  const cleanedPhone = inputPhone.value.replace(/\D/g, '');
  if (cleanedPhone.length < MIN_LENGTH) {
    showError(inputPhone, 'Введите корректный номер телефона (11 цифр)');
    hasError = true;
  }
  if (inputText.value.trim() === '') {
    showError(inputText, 'Напишите ваше сообщение');
    hasError = true;
  }

  const selectedCities = formSelect.getSelected();
  if (selectedCities[0] === '') {
    showError(inputSelect, 'Выберите город из списка');
    hasError = true;
  }
  if (!inputCheckbox.checked) {
    inputCheckbox.setCustomValidity('Вы должны согласиться с условиями');
    inputCheckbox.reportValidity();
    decorationMark.classList.add('subscription__input--error');
    hasError = true;
  } else {
    decorationMark.classList.remove('subscription__input--error');
    inputCheckbox.setCustomValidity('');
  }
  if (!hasError) {
    form.submit();
    form.reset();
  }
});
