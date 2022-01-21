const charactersNumber = document.querySelector('.posts-publish-number span')
const formPostWriteSend = document.querySelector('.posts-publish-form  .field-area')
const btnSubmitForm = document.querySelector('.posts-publish-apply.btn')
const btnPostReset = document.querySelector('.posts-publish-cancel')

const formPostWriteNumberField = document.querySelector('.posts-publish-number')
const formPostWriteBtns = document.querySelector('.posts-publish-btns')

if (formPostWriteSend) {
  formPostWriteSend.addEventListener('keyup', () => {
    formPostSend()
  })

  formPostWriteSend.addEventListener('input', () => {
    formPostSend()
  })

  formPostWriteSend.addEventListener('focus', () => {
    formPostSend()
  })

  function formPostSend () {
    charactersNumber.textContent = 1000 - formPostWriteSend.value.length

    if (formPostWriteSend.focus) {
      formPostWriteNumberField.classList.add('visible')
      formPostWriteBtns.classList.add('visible')
    } else {
      formPostWriteNumberField.classList.remove('visible')
      formPostWriteBtns.classList.remove('visible')
      document.querySelector('.posts-publish textarea').style.height = 45 + 'px'
    }
  }

  formPostWriteSend.addEventListener('keyup', () => {
    if (formPostWriteSend.value.length > 0) {
      btnSubmitForm.classList.remove('disabled')
    } else {
      btnSubmitForm.classList.add('disabled')
    }
  })
  btnPostReset.addEventListener('click', () => {
    btnSubmitForm.classList.add('disabled')
    formPostWriteNumberField.classList.remove('visible')
    formPostWriteBtns.classList.remove('visible')
  })
}
