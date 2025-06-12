import './vendor/imask.js';

const inputPhone = document.querySelector('#phone');

const maskOption = {
  mask: '+{7} (000) 000-00-00'
};

IMask(inputPhone, maskOption);
