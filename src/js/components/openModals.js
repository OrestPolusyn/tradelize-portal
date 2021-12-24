const openModals = Array.from(document.querySelectorAll('.btn-modal'))
const clodeModal = Array.from(document.querySelectorAll('[data-close="modals-close"]'))

if (openModals.length > 0) {
  openModals.forEach(element => {
    element.addEventListener('click', (e) => {
      openComment(e)
    })
  })

  function openComment(e) {
    const btnModOut = e.currentTarget.getAttribute('data-modals')
    const btnModIn = e.currentTarget.getAttribute('data-modal-filter')

    if (e.currentTarget.hasAttribute('data-modals')) {
      Array.from(document.querySelectorAll('.modals')).forEach(element => {
        element.classList.remove('modals-open')
      })

      document.querySelector(`[data-modal='${btnModOut}']`).classList.add('modals-open')
    }

    if (e.currentTarget.hasAttribute('data-modal-filter')) {
      Array.from(document.querySelectorAll('.modal')).forEach(element => {
        element.classList.remove('modal-open')
      })
      document.querySelector(`[data-target-filter='${btnModIn}']`).classList.add('modal-open')
    }
  }

  if (clodeModal.length > 0) {
    clodeModal.forEach(element => {
      element.addEventListener('click', () => {
        Array.from(document.querySelectorAll('.modals')).forEach(element => {
          element.classList.remove('modals-open')
        })
        Array.from(document.querySelectorAll('.modal')).forEach(element => {
          element.classList.remove('modal-open')
        })
      })
    })
  }
}
