export default class Form{
  constructor(container) {
    this._container = container;
    this._form = this._container.querySelector(".form");
    this._button = this._container.querySelector('.button');
    this._setHandlers = this._setHandlers.bind(this);
    this._setHandlers();
  }


  _setHandlers() {
    // Добавляет необходимые для валидации обработчики всем полям формы.
    Array.from(this._form.elements).forEach((input) => {
      if (input !== this._button) input.addEventListener('input', this._checkInputValidity.bind(this));
    });
    this._button.addEventListener('input', this._formSubmission.bind(this));
  }

  _checkInputValidity(event) { // чтобы валидировать поля.
    this._validateForm();
    this._validateInputElement(event.target);
  }

  _formSubmission(event) { // отправка формы
    event.preventDefault();
    this._validateForm();
  }

  _clearingFields(){
    this._form.elements.forEach((input)=>{
      input.value = '';
    })
  }


  _validateInputElement(element) { // проверяет валидность отдельных инпутов
    if (!element.checkValidity()) {
      element.classList.add('footer__input_error');
      return false;
    }
    element.classList.remove('footer__input_error');
    return true;
  }

  _validateForm() { // проверяет валидность всей формы
    let flagValid = true;
    Array.from(this._form.elements).forEach((elem) => {
      if (elem.classList.contains('footer__input')) {
        if (!(this._validateInputElement(elem, this._form))) flagValid = false;
      }
    });
    this._setSubmitButton(flagValid);
    return flagValid;
  }

  _setSubmitButton(flag) { // делает кнопку активной/неактивной
    if (flag) {
      this._button.removeAttribute('disabled');
    } else {
      this._button.setAttribute('disabled', 'disabled');
    }
  }

}
