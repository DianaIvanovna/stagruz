import "./style.scss";
import "./index.html";

import Swiper from 'swiper'; // import Swiper JS
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core'; // Import Swiper and modules
SwiperCore.use([Navigation, Pagination, Scrollbar]); // Install modules

const swiperAutopark = new Swiper('.swiper-container_autopark', {
  // стрелки
  navigation: {
    nextEl: '.swiper-button-next_autopark',
    prevEl: '.swiper-button-prev_autopark',
  },

  //бесконечность
  loop: true,

  // адаптивность
  breakpoints: {
    360: {
      slidesPerView:2,
      spaceBetween: 10,
    },
    1040: {
      slidesPerView: 3, // количество слайдов
      spaceBetween: 25, // размер отступа
    }
  }

});

// const swiper = new Swiper('.swiper-container_my', {
//   // стрелки
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     // фракции
//     // type: 'fraction',
//     // renderFraction: function (currentClass, totalClass) {
//     //   return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
//     // }
//     // прогрессбар
//     type: "progressbar",

//   },
//   // количество слайдов
//   slidesPerView: 2,
//   //Отключ функционал, если слайдов меньше
//   // watchOverflow: true,

//   // размер отступа
//   spaceBetween: 30,

//   //бесконечность
//   loop: true,

//   // адаптивность
//   // breakpoints: {
//   //   320: {
//   //     slidesPerView:1,
//   //   },
//   //   1040: {
//   //     slidesPerView: 3
//   //   }
//   // }

// });

import Header from './js/Header';

(function () {
  const header = new Header();
})();