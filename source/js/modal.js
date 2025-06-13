const showModalButton = document.querySelector('.about__button');
const popupBox = document.querySelector('.popup');

showModalButton.addEventListener('click', (evt) => {
  showModal();
  evt.stopPropagation();
});

function showModal() {
  popupBox.classList.add('popup__opened');
  popupBox.classList.remove('popup__closed');
  document.body.style.overflow = 'hidden';
}

function hideModal() {
  popupBox.classList.remove('popup__opened');
  popupBox.classList.add('popup__closed');
  document.body.style.overflow = 'auto';
}

popupBox.addEventListener('click', (evt) => {
  if (!evt.target.closest('.popup__container') || evt.target.closest('.popup__closed-button')) {
    hideModal();
  }
});
