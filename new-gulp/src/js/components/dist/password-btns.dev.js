"use strict";

var passwordBtnChange = Array.from(document.querySelectorAll('.field-btn'));

if (passwordBtnChange.length > 0) {
  passwordBtnChange.forEach(function (el) {
    el.addEventListener('click', function () {
      console.log(this);

      if (!this.classList.contains('field-btn-show')) {
        this.classList.add('field-btn-show');
        this.previousElementSibling.setAttribute('type', 'text');
      } else {
        this.classList.remove('field-btn-show');
        this.previousElementSibling.setAttribute('type', 'password');
      }
    });
  });
}