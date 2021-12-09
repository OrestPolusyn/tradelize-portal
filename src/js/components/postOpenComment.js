const postOpenCommentsBtn = Array.from(document.querySelectorAll('.post-btn'));

if (postOpenCommentsBtn.length > 0) {
  postOpenCommentsBtn.forEach(element => {
    element.addEventListener('click', (e) => {
      openComment(e);
    })
  });

  function openComment(e) {
    let btnPath = e.currentTarget.getAttribute('data-path');
    let btnPathReply = e.currentTarget.getAttribute('data-path-reply');

    if (e.currentTarget.hasAttribute('data-path')) {
      Array.from(document.querySelectorAll(".comments")).forEach(element => {
        element.classList.remove('comments-open');
      });
      document.querySelector(`[data-target="${btnPath}"]`).classList.add('comments-open');
    }

    if (e.currentTarget.hasAttribute('data-path-reply')) {

      Array.from(document.querySelectorAll(".post-write-reply")).forEach(element => {
        element.classList.remove('comments-open');
      });

      document.querySelector(`[data-target-reply="${btnPathReply}"]`).classList.add('comments-open');
    }
  }
}
