let formComment = Array.from(document.querySelectorAll('.post-write')),
  formTextarea = Array.from(document.querySelectorAll('textarea'));

if (formComment.length > 0) {
  formComment.forEach(element => {
    element.addEventListener('submit', (e) => {
      e.preventDefault();
      checkLenght();
    })

    element.addEventListener('keyup', (e) => {
      checkLenght();
    })
  });


  function checkLenght() {
    formTextarea.forEach(item => {
      if (item.value.length === 800) {
        item.nextElementSibling.classList.add('post-write-warning-active');
      } else {
        item.nextElementSibling.classList.remove('post-write-warning-active');
      }
    });
  }
}

const textarea = Array.from(document.querySelectorAll('textarea'));

textarea.forEach(element => {
  element.addEventListener('keydown', autosize);
});

function autosize() {
  var el = this;
  setTimeout(function () {
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 0);
}
