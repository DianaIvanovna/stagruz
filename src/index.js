import "./style.scss";

import Swiper from 'swiper'; // import Swiper JS
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core'; // Import Swiper and modules
import Header from './js/Header';
import Animation from './js/Animation';
import Form from './js/Form';

// functions header
(function () {
  const links = document.querySelectorAll('.header__link');
  const services = document.querySelector('.services');
  const autopark = document.querySelector('.autopark');
  const movers = document.querySelector('.movers');
  const photogallery = document.querySelector('.photogallery');
  const footer = document.querySelector('footer');

  const header = new Header(links,[services, autopark, movers, photogallery, footer]);
})();

// swiper
(function () {
  SwiperCore.use([Navigation, Pagination, Scrollbar]); // Install modules
  const swiperAutopark = new Swiper('.swiper-container_autopark', {
    navigation: {
      nextEl: '.swiper-button-next_autopark',
      prevEl: '.swiper-button-prev_autopark',
    },
    loop: true,
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
    navigation: {
      nextEl: '.swiper-button-next_preview',
      prevEl: '.swiper-button-prev_preview',
    },
    loop: true,
    slidesPerView:1,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: "progressbar",
    },

  });

  const cars = [{
    name: "Мiнi",
    length: " 3.3 ",
    height: " 1,8 ",
    width: " 1,7 ",
    loadCapacity: " 1,5 ",
    volume: " 11.5 "
  },
  {
    name: "Стандарт",
    length: " 4,3 ",
    height: " 1,8 ",
    width: " 1,7 ",
    loadCapacity: " 2 ",
    volume: " 13 "
  },
  {
    name: "Максі",
    length: " 4,2 ",
    height: " 2,2 ",
    width: " 2,2 ",
    loadCapacity: " 3 ",
    volume: " 20 "
  }]

  const slideAll = document.querySelector('.swiper-number_end');
  const slideCurrent =  document.querySelector('.swiper-number_start');
  const carName = document.querySelector('.preview__car-name');
  const carText = document.querySelector('.preview__car-text');
  const carLoadCapacity = document.querySelectorAll('.preview__weight_loadCapacity');
  const carVolume = document.querySelectorAll('.preview__weight_carVolume');
  slideAll.innerHTML = '03';
  slideCurrent.innerHTML = '01';

  // инициализация полей машины
  carName.innerHTML = cars[0].name;
  carText.innerHTML = `довжина${cars[0].length}, вистота${cars[0].height}, ширина${cars[0].width}`;
  carLoadCapacity.forEach((item)=>{
    item.innerHTML=cars[0].loadCapacity;
  })
  carVolume.forEach((item)=>{
    item.innerHTML=cars[0].volume;
  })

  swiperPreview.on('slideChange', function(){
    let currentForMas = swiperPreview.realIndex;
    let current = ++swiperPreview.realIndex;

    // инициализация полей машины
    carName.innerHTML = cars[currentForMas].name;
    carText.innerHTML = `довжина${cars[currentForMas].length}, вистота${cars[currentForMas].height}, ширина${cars[currentForMas].width}`;
    carLoadCapacity.forEach((item)=>{
      item.innerHTML=cars[currentForMas].loadCapacity;
    })
    carVolume.forEach((item)=>{
      item.innerHTML=cars[currentForMas].volume;
    })

    slideCurrent.innerHTML = '0' + current;
  })

})();

// animation
(function () {
  // анимация не работает с медиа запросом, пришлось делать так..
  const windowWidth = window.innerWidth;
  let classActiveCar;

  if (windowWidth <= 600) classActiveCar = "footer__car_anim-600";
  else if (windowWidth <= 900) classActiveCar = "footer__car_anim-900";
  else if (windowWidth <= 1300) classActiveCar = "footer__car_anim-1300";
  else classActiveCar = "footer__car_anim-1900";

  const animationObject = [
    {
      item: ".section__title", // объекты с каким классом имеют анимацию при скролле
      classActive: "section__title_anim", // класс для добавления анимации
    },
    {
      item: ".footer__down-container",
      classActive: classActiveCar,
    },
    {
      item: ".packaging-materials__item",
      classActive: "packaging-materials__item_anim"
    }
  ];

  const animation = new Animation(animationObject);
})();

// form
(function () {
  const formContainer = document.querySelector('.footer__container');
  const form = new Form(formContainer);
})();

// LAZY LOADING IMAGE AND MAP
(function () {

  document.addEventListener("DOMContentLoaded", function() {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("footer__card")){
            const item = entry.target;
            item.innerHTML = `<iframe class="footer__maps" src="https://www.google.com/maps/d/embed?mid=1pq0l6-IMWArbcPmm-qQTbuy1M3TPFoG6" width="579" height="240"></iframe>`;
            imgObserver.unobserve(item);
          } else {
            const lazyPicture = entry.target;
            const lazyImage = lazyPicture.getElementsByTagName("img");
            const sourseLazyImage = lazyPicture.getElementsByTagName("source");

            Array.from(sourseLazyImage).forEach((item)=>{
              item.setAttribute('srcset', item.getAttribute('data-srcset'))
            })
            lazyImage[0].setAttribute('srcset', lazyImage[0].getAttribute('data-srcset'));
            lazyPicture.classList.remove("lazy-image");
            imgObserver.unobserve(lazyPicture);
          }
        }
      })
    });
    const lazyImages = document.querySelectorAll('.lazy-image');
    const maps = document.querySelector('.footer__card');
    lazyImages.forEach((v) => {
      imageObserver.observe(v);
    })
    imageObserver.observe(maps);
  })

})();

