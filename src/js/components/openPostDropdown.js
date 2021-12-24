const dropDownWritePostForm = document.querySelector('.posts-publish-form')
const dropDownWritePost = document.querySelector('.posts-publish-dropdown-list')

if (dropDownWritePostForm) {
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('posts-publish-dropdown')) {
      dropDownWritePost.classList.toggle('posts-publish-dropdown-open')
    } else {
      dropDownWritePost.classList.remove('posts-publish-dropdown-open')
    }
  })

  dropDownWritePost.addEventListener('click', (e) => {
    document.querySelector('.posts-publish-dropdown-text').innerText = e.target.textContent
  })
}
