import "./style.scss";
import "./index.html";
// import Swiper JS
import Swiper from 'swiper';

// Import Swiper and modules
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core';

// Install modules
SwiperCore.use([Navigation, Pagination, Scrollbar]);

const swiper = new Swiper('.swiper-container_my', {
  // стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    // фракции
    // type: 'fraction',
    // renderFraction: function (currentClass, totalClass) {
    //   return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
    // }
    // прогрессбар
    type: "progressbar",

  },
  // количество слайдов
  slidesPerView: 2,
  //Отключ функционал, если слайдов меньше
  // watchOverflow: true,

  // размер отступа
  spaceBetween: 30,

  //бесконечность
  loop: true,

  // адаптивность
  // breakpoints: {
  //   320: {
  //     slidesPerView:1,
  //   },
  //   1040: {
  //     slidesPerView: 3
  //   }
  // }

});

import Header from './js/Header';

(function () {
  const header = new Header();
})();