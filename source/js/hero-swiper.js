import Swiper from 'swiper';
import {Pagination, A11y, Keyboard} from 'swiper/modules';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const slidesCount = document.querySelectorAll('.hero__swiper .swiper-slide').length;
  const swiper = new Swiper('.hero__swiper', {
    modules: [Pagination, A11y, Keyboard],
    direction: 'horizontal',
    loop: true,
    speed: 700,
    loopedSlides: slidesCount,
    slidesPerView: 1,
    initialSlide: 0,
    watchOverflow: true,
    a11y: {
      enabled: true,
      paginationBulletMessage: 'Перейти к слайду {{index}}',
      focusableElements: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    },
    pagination: {
      el: '.hero__pagination',
      bulletClass: 'pagination__item',
      bulletActiveClass: 'pagination__item--active',
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className}" tabindex="0" aria-label="Слайд ${index + 1}"></button>`;
      },
    },
    on: {
      slideChange(swiperInstance) {
        const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
        const activeInfo = activeSlide.querySelector('.hero__info');
        const pagination = document.querySelector('.swiper-pagination');
        if (activeInfo && pagination && !activeInfo.contains(pagination)) {
          activeInfo.insertBefore(pagination, activeInfo.firstChild);
        }
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusedElement = document.activeElement;
      const swiperElement = document.querySelector('.hero__swiper');
      if (focusedElement && swiperElement) {
        const slide = focusedElement.closest('.swiper-slide');
        if (slide) {
          const slideIndex = Array.from(slide.parentElement.children).indexOf(slide);
          swiper.slideTo(slideIndex, 300, true);
        }
      }
    }
  });
});


