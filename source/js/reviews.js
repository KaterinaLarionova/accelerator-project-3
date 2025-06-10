import Swiper from 'swiper';
import {Navigation, Mousewheel, Scrollbar} from 'swiper/modules';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const slidesCount = document.querySelectorAll('.reviews__swiper .swiper-slide').length;
  new Swiper('.reviews__swiper', {
    modules: [Navigation, Mousewheel, Scrollbar],
    direction: 'horizontal',
    loop: false,
    speed: 700,
    loopedSlides: slidesCount,
    slidesPerView: 'auto',
    initialSlide: 0,
    watchOverflow: true,
    centeredSlides: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 0,
        simulateTouch: true,
        //width: 290,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        simulateTouch: true,
        //width: 1150,
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
        simulateTouch: false,
        //width: 1240,
      }
    },
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 326,
      hide: false,
    },
    mousewheel: {
      invert: true,
      forceToAxis: true,
      sensitivity: 2,
      releaseOnEdges: true,
    },
  });

  function resizeScrollbar() {
    const screenWidth = window.innerWidth;
    let scrollbarWidth = 394;
    if (screenWidth <= 768) {
      scrollbarWidth = 326;
    }
    const scrollbar = document.querySelector('.reviews__scrollbar .swiper-scrollbar-drag');
    scrollbar.style.width = `${scrollbarWidth}px`;
  }

  resizeScrollbar();
  window.addEventListener('resize', resizeScrollbar);
});

