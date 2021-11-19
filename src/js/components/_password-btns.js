let passwordBtnChange = Array.from(document.querySelectorAll('.field-btn'));

passwordBtnChange.forEach(el => {
  el.addEventListener('click', function () {
    if (!this.classList.contains('field-btn--show')) {
      this.classList.add('field-btn--show');
      this.previousElementSibling.setAttribute("type", "text");
    } else {
      this.classList.remove('field-btn--show');
      this.previousElementSibling.setAttribute("type", "password");
    }
  });
});
