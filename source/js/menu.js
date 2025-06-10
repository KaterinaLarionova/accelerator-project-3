const navMain = document.querySelector('.site-list');
const navButton = document.querySelector('.main-header__button');
const navToggle = document.querySelector('.main-header__toggle');
const menuLinks = document.querySelectorAll('.link-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const body = document.querySelector('.page__body');
const listButtons = document.querySelectorAll('.site-list__button');


function closeMenu() {
  navMain.classList.add('site-list--closed');
  navMain.classList.remove('site-list__open');
  navToggle.classList.remove('main-header__toggle--open');
  navToggle.classList.add('main-header__toggle--closed');
  navButton.classList.remove('main-header__button--open');
  navButton.classList.add('main-header__button--closed');
  menuOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}
function burger(evt) {
  evt.stopPropagation();
  if (navToggle.classList.contains('main-header__toggle--open')) {
    closeMenu();
  } else {
    navMain.classList.add('site-list__open');
    navMain.classList.remove('site-list--closed');
    navToggle.classList.add('main-header__toggle--open');
    navToggle.classList.remove('main-header__toggle--closed');
    navButton.classList.add('main-header__button--open');
    navButton.classList.remove('main-header__button--closed');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

body.addEventListener('click', (evt) => {
  if (
    evt.target.closest('.site-list') ||
    evt.target.closest('.main-header__button')
  ) {
    return;
  }
  closeMenu();
});

navButton.addEventListener('click', burger);


listButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const sublist = button.nextElementSibling;

    const isOpen = button.classList.contains('site-list__button--open');

    if (isOpen) {
      sublist.classList.add('sublist--closed');
      button.classList.remove('site-list__button--open');
      button.classList.add('site-list__button--closed');
    } else {
      sublist.classList.remove('sublist--closed');
      button.classList.add('site-list__button--open');
      button.classList.remove('site-list__button--closed');
    }
  });
});
