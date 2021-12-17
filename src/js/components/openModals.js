const openModals = Array.from(document.querySelectorAll('.btn-modal'));

if (openModals.length > 0) {
  openModals.forEach(element => {
    element.addEventListener('click', (e) => {
      openComment(e);
    })
  });

  function openComment(e) {
    let btnModOut = e.currentTarget.getAttribute('data-modals');
    let btnModIn = e.currentTarget.getAttribute('data-modal-filter');

    console.log(btnModIn);
    if (e.currentTarget.hasAttribute('data-modals')) {
      Array.from(document.querySelectorAll(".modals")).forEach(element => {
        element.classList.remove('modals-open');
      });
      document.querySelector(`[data-modal="${btnModOut}"]`).classList.add('modals-open');
    }

    if (e.currentTarget.hasAttribute('data-modal-filter')) {
      Array.from(document.querySelectorAll(".modal")).forEach(element => {
        element.classList.remove('modal-open');
      });
      document.querySelector(`[data-target-filter="${btnModIn}"]`).classList.add('modal-open');
    }
  }
}


if (document.querySelector('[data-close="modals-copy-filters"]')) {
  document.querySelector('[data-close="modals-copy-filters"]').addEventListener("click", () => {
    Array.from(document.querySelectorAll(".modals")).forEach(element => {
      element.classList.remove('modals-open');
    });
    Array.from(document.querySelectorAll(".modal")).forEach(element => {
      element.classList.remove('modal-open');
    });
  })
}
