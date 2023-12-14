export default function modal() {
  const modal = document.querySelector('.modal');
  const btnsOpen = document.querySelectorAll('.open_now');
  const btnsClose = document.querySelector('#close_now');
  for (let btn of btnsOpen) {
    btn.addEventListener('click', () => {
      console.log(btn);
      modal.classList.toggle('modal_show');
      console.log(modal.classList);
    });
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.toggle('modal_show');
    }
  };
  btnsClose.addEventListener('click', () => {
    modal.classList.toggle('modal_show');
  });
}
