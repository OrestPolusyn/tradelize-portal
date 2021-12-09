const charactersNumber = document.querySelector('.posts-publish-number span')
const formPostWriteSend = document.querySelector('.posts-publish-form  .field-area')

const formPostWriteNumberField = document.querySelector('.posts-publish-number')
const formPostWriteBtns = document.querySelector('.posts-publish-btns')

if (formPostWriteSend) {

  formPostWriteSend.addEventListener("keyup", () => {
    formPostSend();
  })

  formPostWriteSend.addEventListener("input", () => {
    formPostSend();
  })

  function formPostSend() {
    const startNumber = formPostWriteSend.value.length;
    charactersNumber.textContent = 1000 - formPostWriteSend.value.length

    if (formPostWriteSend.value.length > 0) {
      formPostWriteNumberField.classList.add("visible")
      formPostWriteBtns.classList.add("visible")
    } else {
      formPostWriteNumberField.classList.remove("visible")
      formPostWriteBtns.classList.remove("visible")
      document.querySelector(".posts-publish textarea").style.height = 45 + "px"
    }
  }
}
