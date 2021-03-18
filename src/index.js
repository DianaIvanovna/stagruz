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

const swiperPreview = new Swiper('.swiper-container_preview', {
  // стрелки
  navigation: {
    nextEl: '.swiper-button-next_preview',
    prevEl: '.swiper-button-prev_preview',
  },
  //бесконечность
  loop: true,
  slidesPerView:1,
  pagination: {
    el: '.swiper-pagination',
    type: "progressbar",
  },

});

let slideAll = document.querySelector('.swiper-number_end');
let slideCurrent =  document.querySelector('.swiper-number_start');

slideAll.innerHTML = '03';
slideCurrent.innerHTML = '01';

swiperPreview.on('slideChange', function(){
  let current = ++swiperPreview.realIndex;
  slideCurrent.innerHTML = '0' + current;
})

// const swiper = new Swiper('.swiper-container_my', {
//   // стрелки
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     // фракции
//     type: 'fraction',
//     renderFraction: function (currentClass, totalClass) {
//       return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
//     }
//     // прогрессбар
//     // type: "progressbar",

//   },
//   // количество слайдов
//   slidesPerView: 2,
//   //Отключ функционал, если слайдов меньше
//   // watchOverflow: true,

//   // размер отступа
//   spaceBetween: 30,

//   //бесконечность
//   loop: true,

//   scrollbar: true,
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