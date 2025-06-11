import Swiper from 'swiper';
import {Navigation, Mousewheel, Pagination, A11y, Grid} from 'swiper/modules';
import 'swiper/css';

function groupNewsItems(groupSize) {
  const items = Array.from(document.querySelectorAll('.news__item'));
  const wrapper = document.querySelector('.news__list');

  if (!wrapper || items.length === 0) {
    return;
  }

  wrapper.innerHTML = '';
  for (let i = 0; i < items.length; i += groupSize) {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide', 'news__union-slide');

    for (let j = 0; j < groupSize; j++) {
      if (items[i + j]) {
        slide.appendChild(items[i + j]);
      }
    }

    wrapper.appendChild(slide);
  }
}

function getGroupSize() {
  const width = window.innerWidth;
  if (width >= 1440) {
    return 3;
  }
  if (width >= 768) {
    return 4;
  }
  return 2;
}

document.addEventListener('DOMContentLoaded', () => {
  groupNewsItems(getGroupSize());
  const slidesCount = document.querySelectorAll('.news__swiper .swiper-slide').length;
  const swiper = new Swiper('.news__swiper', {
    modules: [Navigation, Mousewheel, Pagination, A11y, Grid],
    direction: 'horizontal',
    loop: false,
    speed: 700,
    loopedSlides: slidesCount,
    watchOverflow: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    simulateTouch: true,
    a11y: {
      enabled: true,
      paginationBulletMessage: 'Перейти к слайду {{index}}',
      focusableElements: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
        simulateTouch: true,
      },
      1440: {
        slidesPerView: 1,
        spaceBetween: 30,
        simulateTouch: false,
      }
    },
    navigation: {
      nextEl: '.news__button--next',
      prevEl: '.news__button--prev',
    },
    mousewheel: {
      invert: true,
      forceToAxis: true,
      sensitivity: 2,
      releaseOnEdges: true,
    },
    pagination: {
      el: '.news__pagination',
      dynamicBullets: true,
      bulletClass: 'news__pagination--item',
      bulletActiveClass: 'news__pagination--item-active',
      type: 'custom',
      clickable: true,
      renderCustom: function (swiperPagination, current, total) {
        const countBullets = Math.min(total, 4);
        const startBullet = Math.min(Math.max(current - 2, 1), total - countBullets + 1);
        let str = '';
        for (let i = startBullet; i < startBullet + countBullets; i++) {
          if (i === current) {
            str += ` <button type="button" class="news__pagination--item news__pagination--item-active" data-index="${i - 1}">${i}</button> `;
          } else {
            str += ` <button type="button" class="news__pagination--item" data-index="${i - 1}">${i}</button> `;
          }
        }
        return str;
      },
    },
  });
  document.querySelector('.news__pagination')?.addEventListener('click', (e) => {
    const target = e.target.closest('.news__pagination--item');
    if (target && target.dataset.index) {
      const index = parseInt(target.dataset.index, 10);
      swiper.slideTo(index);
    }
  });
  window.addEventListener('resize', () => {
    groupNewsItems(getGroupSize());
    swiper.update();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusedElement = document.activeElement;
      const swiperElement = document.querySelector('.news__swiper');
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
