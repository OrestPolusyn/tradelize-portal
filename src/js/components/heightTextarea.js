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
}

function checkLenght() {
  formTextarea.forEach(item => {
    if (item.value.length === 800) {
      item.nextElementSibling.classList.add('post-write-warning-active');
    } else {
      item.nextElementSibling.classList.remove('post-write-warning-active');
    }
  });
}

var tx = document.getElementsByTagName('textarea');

for (var i = 0; i < tx.length; i++) {
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}
