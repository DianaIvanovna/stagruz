export default class Header {
  constructor() {
    this._header = document.querySelector('.header');
    this._headerMenu = this._header.querySelector('.header__modile-menu');
    this._headerBackground = document.querySelector('.background-mobile');
    this._headerDropdown = this._header.querySelectorAll('.header__menu');
    this._setHandlers();
  }

  _setHandlers() {
    // window.addEventListener('scroll', this._headerScrolling.bind(this));
    this._headerMenu.addEventListener('click', this._openMobile.bind(this));
    this._headerBackground.addEventListener('click', this._closeMobile.bind(this));
  }

  _openMobile(event) { // открытие мобильной версии
    event.preventDefault();
    this._header.classList.toggle('header_open-mobile');
    this._headerBackground.classList.toggle('background-mobile_active');
  }

  _closeMobile(event) { // закрытие мобильной версии
    event.preventDefault();
    this._header.classList.remove('header_open-mobile');
    this._headerBackground.classList.remove('background-mobile_active');
  }

  // _headerScrolling(event) {
  //   console.log('!');
  //   console.log(window.pageYOffset);
  //   if (window.pageYOffset > 1){
  //     this._header.classList.add('header_scrolling');
  //   }else {
  //     this._header.classList.remove('header_scrolling');
  //   }

  // }

}
