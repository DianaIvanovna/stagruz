export default class Header {
  constructor(links, elements) {
    this._header = document.querySelector('.header');
    this._links = links;
    this._elements = elements;
    this._active_link = 0;
    this._headerMenu = this._header.querySelector('.header__modile-menu');
    this._headerBackground = document.querySelector('.background-mobile');
    this._headerDropdown = this._header.querySelectorAll('.header__menu');
    this._setHandlers();
  }

  _setHandlers() {
    this._links[this._active_link].classList.add('header__link_active'); // вначале активна 1 ссылка
    window.addEventListener('scroll', this._headerScrolling.bind(this));
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

  _headerScrolling(event) {
    if (window.pageYOffset > 1){
      this._header.classList.add('header_scrolling');
      this._elementScroll(); // для подсвечивания активных секций
    }else {
      this._header.classList.remove('header_scrolling');
    }
  }

  _elementScroll(){ // запуск анимации
    this._elements.forEach((item,index)=>{

      const itemHeight = item.offsetHeight; // высота объекта
      const itemOffset = this._offset(item).top; // позиция у объекта относительно вверха страницы
      const animStart = 2; // коэффицент, когда будет применена анимация. 4 - Когда видно 1/2 часть элемента
      let itemPoint = window.innerHeight - itemHeight/animStart; // объект будет анимироваться, когда его видно на половину
      if (itemHeight > window.innerHeight){
        itemPoint = window.innerHeight - window.innerHeight/animStart;
      }
      if ((pageYOffset > itemOffset - itemPoint)&&(pageYOffset < (itemOffset + itemHeight)) && (index!=this._active_link)) { // когда попали на новую секцию
        this._links[this._active_link].classList.remove('header__link_active');
        this._active_link = index;
        this._links[this._active_link].classList.add('header__link_active'); // новая активная ссылка
      }
    });
  }

  _offset(el) { // функция вычисления координаты y и x относительно вверха страницы
    let rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

}
