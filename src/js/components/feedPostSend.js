const imageAdd = document.querySelector('.posts-publish-image-thumb')
const addImagePost = document.querySelector('.posts-publish-btn')
const imageList = document.querySelector('.posts-publish-gallery-list')

if (imageAdd) {
  addImagePost.addEventListener('input', (event) => {
    const urlImg = URL.createObjectURL(event.target.files[0])

    imageList.innerHTML += `<li class="posts-publish-gallery-item"><img class = "posts-publish-image-thumb" src='` + urlImg + `' height = "100"  width = "100"/><button class="posts-publish-image-delete" type="button"><span class="sr-only">Удалить изображение</span></button></li>`
    call()
  })

  function call () {
    const btnDeleteImage = Array.from(document.querySelectorAll('.posts-publish-image-delete'))

    btnDeleteImage.forEach(element => {
      element.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove()
      })
    })
  }
}
