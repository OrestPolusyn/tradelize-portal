const moreNotifBtn = Array.from(document.querySelectorAll('.notifications-content-more-btn'))

if (moreNotifBtn.length > 0) {
  moreNotifBtn.forEach(element => {
    element.addEventListener('click', (e) => {
      const currentBtn = e.currentTarget

      document.querySelectorAll('.notifications-more-dropdown').forEach(item => {
        item.classList.remove('notifications-more-dropdown-show')
      })

      currentBtn.nextElementSibling.classList.add('notifications-more-dropdown-show')
    })
  })
}
