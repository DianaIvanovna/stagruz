export default class AnimationHeader { // класс для анимации при скролле
  constructor(animationObject) {
    this._animationObjects = animationObject;
    this._animItems = [];
    this._setHandlers();
  }

  _setHandlers() {
    this._animationObjects.forEach((object)=>{
      let DomItems = document.querySelectorAll(object.item);
      if (DomItems.length>0){
        DomItems.forEach((animItem)=>{ // нахожу все dom элементы для анимации и присоединяю к массиву, с их активным классом
          this._animItems.push({
            dom: animItem,
            classActive: object.classActive,
          })
        })
      }
    });

    if (this._animItems.length > 0){ // проверка на существование элементов с анимацией
      window.addEventListener('scroll', this._animScroll.bind(this));
      this._animScroll();
    }
  }

  _animScroll(){ // запуск анимации
    this._animItems.forEach((animItem)=>{
      const animItemHeight = animItem.dom.offsetHeight; // высота объекта
      const animItemOffset = this._offset(animItem.dom).top; // позиция у объекта относительно вверха страницы
      const animStart = 4; // коэффицент, когда будет применена анимация. 4 - Когда видно 1/4 часть элемента
      let animItemPoint = window.innerHeight - animItemHeight/animStart; // объект будет анимироваться, когда его видно на четверть?
      if (animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight/animStart;
      }
      if ((pageYOffset > animItemOffset - animItemPoint)&&(pageYOffset < (animItemOffset + animItemHeight))) {
        animItem.dom.classList.add(animItem.classActive);
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