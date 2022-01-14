const btnSideNav = Array.from(document.querySelectorAll('.profile-side .btn'))

const btnCloseSideEdit = Array.from(document.querySelectorAll('[data-side="normal"]'))

if (btnSideNav.length > 0) {
  btnSideNav.forEach(element => {
    element.addEventListener('click', (e) => {
      const openSideBarNav = e.currentTarget.getAttribute('data-side-path')

      if (e.currentTarget.hasAttribute('data-side-path')) {
        document.querySelector(`[data-side-target="${openSideBarNav}"]`).classList.add('profile-side-edit-open')
      }
      document.querySelector('body').classList.toggle('side-open')
    })
  })
}

if (btnCloseSideEdit.length > 0) {
  btnCloseSideEdit.forEach(element => {
    element.addEventListener('click', () => {
      document.querySelectorAll('[data-side-target]').forEach(item => {
        item.classList.remove('profile-side-edit-open')
      })
    })
  })
}
