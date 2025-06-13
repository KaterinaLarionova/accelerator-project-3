import {isEscapeKey} from './util.js';

const showModalButton = document.querySelector('.about__button');
const popupBox = document.querySelector('.popup');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideModal();
  }
};

showModalButton.addEventListener('click', (evt) => {
  showModal();
  evt.stopPropagation();
});

function showModal() {
  popupBox.classList.add('popup__opened');
  popupBox.classList.remove('popup__closed');
  document.body.style.overflow = 'hidden';
  document.body.addEventListener('keydown', onModalEscKeydown);
}

function hideModal() {
  popupBox.classList.remove('popup__opened');
  popupBox.classList.add('popup__closed');
  document.body.style.overflow = 'auto';
  document.body.removeEventListener('keydown', onModalEscKeydown);
}

popupBox.addEventListener('click', (evt) => {
  if (!evt.target.closest('.popup__container') || evt.target.closest('.popup__closed-button')) {
    hideModal();
  }
});
