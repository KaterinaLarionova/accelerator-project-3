const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
  const button = item.querySelector('.faq__button');
  const info = item.querySelector('.faq__info');

  const toggleItem = () => {
    const isOpened = item.classList.contains('faq__item--opened');

    item.classList.toggle('faq__item--opened', !isOpened);
    item.classList.toggle('faq__item--closed', isOpened);

    button.classList.toggle('faq__button--opened', !isOpened);
    button.classList.toggle('faq__button--closed', isOpened);

    info.classList.toggle('faq__info--opened', !isOpened);
    info.classList.toggle('faq__info--closed', isOpened);
  };

  item.addEventListener('click', (evt) => {
    if (
      evt.target.closest('.faq__button') ||
      evt.target.closest('.faq__subtitle') ||
      evt.target.closest('.faq__info--opened') ||
      evt.target === item
    ) {
      toggleItem();
    }
  });
});
