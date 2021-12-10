const fitersCopyModal = Array.from(document.querySelectorAll('.modals-copy-content'));
const fitersCopyModalBtn = Array.from(document.querySelectorAll('.modals-copy-filters .tab'));

if (fitersCopyModal.length > 0) {
  fitersCopyModalBtn.forEach(element => {
    element.addEventListener('click', (e) => {
      openComment(e);
    })
  });

  function openComment(e) {
    let btnPath = e.currentTarget.firstElementChild.getAttribute('data-copy-filer');

    fitersCopyModalBtn.forEach(element => {
      element.classList.remove('tab-active')
    });

    if (e.currentTarget.firstElementChild.hasAttribute('data-copy-filer')) {
      Array.from(document.querySelectorAll(".modals-copy-content")).forEach(element => {
        element.classList.remove('modals-copy-content-open');
      });
      e.currentTarget.classList.add('tab-active');

      document.querySelector(`[data-content-filer="${btnPath}"]`).classList.add('modals-copy-content-open');
    }
  }
}
