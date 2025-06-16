import './vendor/imask.js';
import {popupSelect} from './select.js';

const MIN_LENGTH = 11;
const form = document.querySelector('.popup__form');
const inputName = document.getElementById('popup-name');
const inputPhone = document.getElementById('popup-phone');
const inputSelect = document.querySelector('.popup__select');
const inputCheckbox = document.getElementById('popup-checkbox');
const decorationMark = document.querySelector('.popup__decoration-mark');

document.addEventListener('DOMContentLoaded', () => {
  const maskOption = {
    mask: '+{7} (000) 000-00-00',
  };
  window.IMask(inputPhone, maskOption);
});

function showError(input, message) {
  input.setCustomValidity(message);
  input.reportValidity();
  input.classList.add('popup__input--error');
}

function clearError(input) {
  input.setCustomValidity('');
  input.classList.remove('popup__input--error.ss-main');
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let hasError = false;
  [inputName, inputPhone, inputSelect, inputCheckbox].forEach(clearError);

  if (inputName.value.trim() === '') {
    showError(inputName, 'Пожалуйста, заполните имя');
    hasError = true;
  }
  const cleanedPhone = inputPhone.value.replace(/\D/g, '');
  if (cleanedPhone.length < MIN_LENGTH) {
    showError(inputPhone, 'Введите корректный номер телефона (11 цифр)');
    hasError = true;
  }

  const selectedCities = popupSelect.getSelected();
  if (selectedCities[0] === '') {
    showError(inputSelect, 'Выберите город из списка');
    hasError = true;
  }
  if (!inputCheckbox.checked) {
    inputCheckbox.setCustomValidity('Вы должны согласиться с условиями');
    inputCheckbox.reportValidity();
    decorationMark.classList.add('popup__input--error');
    hasError = true;
  } else {
    decorationMark.classList.remove('popup__input--error');
    inputCheckbox.setCustomValidity('');
  }
  if (!hasError) {
    form.submit();
    form.reset();
  }
});
