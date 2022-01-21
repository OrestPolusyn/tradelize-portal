const radioBtnSideProfile = Array.from(document.querySelectorAll('.profile-side-stat input'))
const btcElements = Array.from(document.querySelectorAll('[data-side-item]'))

if (radioBtnSideProfile.length > 0) {
  btcElements.forEach(item => {
    item.classList.remove('radio-show')
    if (item.dataset.sideItem === 'btc') {
      item.classList.add('radio-show')
    }
  })

  radioBtnSideProfile.forEach(element => {
    element.addEventListener('click', () => {
      checkedInput(element)
    })
  })

  function checkedInput(element) {
    if (element.dataset.sideTarget === 'btc') {
      btcElements.forEach(item => {
        item.classList.remove('radio-show')
        if (item.dataset.sideItem === 'btc') {
          item.classList.add('radio-show')
        }
      })
    } else {
      btcElements.forEach(item => {
        item.classList.remove('radio-show')
        if (item.dataset.sideItem === 'usd') {
          item.classList.add('radio-show')
        }
      })
    }
  }
}
