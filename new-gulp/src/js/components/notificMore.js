const moreNotifBtn = Array.from(document.querySelectorAll('.notifications-content-more-btn'))
const notItems = Array.from(document.querySelectorAll('.notifications-content-item'))

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

if (notItems.length > 0) {
  notItems.forEach(element => {
    const popcorn = element.querySelector('.popcorn')
    const tooltip = element.querySelector('.popdown')

    if (popcorn && tooltip) {
      Popper.createPopper(popcorn, tooltip, {
        placement: 'auto-start',
        modifiers: {
          flip: {
            boundariesElement: 'scrollParent',
            flipVariations: true
          },
          name: 'offset',
          options: {
            offset: [-20, 10],
          },
          preventOverflow: {
            boundariesElement: 'scrollParent',
            escapeWithReference: true
          },
        }
      })

      const scrollToCenter = () => {
        const scrollParent = document.querySelector('.notifications-content');
        scrollParent.scrollTop = popcorn.offsetTop - scrollParent.clientHeight / 2
        scrollParent.scrollLeft = popcorn.offsetLeft + popcorn.clientWidth / 2 - scrollParent.clientWidth / 2
      }

      scrollToCenter()
    }
  })
}
