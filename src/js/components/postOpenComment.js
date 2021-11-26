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
      document.querySelector(`[data-target="${btnPath}"]`).classList.toggle('comments-open');
    }

    if (e.currentTarget.hasAttribute('data-path-reply')) {
      document.querySelector(`[data-target-reply="${btnPathReply}"]`).classList.toggle('comments-open');
      console.log(document.querySelector(`[data-target-reply="${btnPathReply}"]`));
    }
  }
}
