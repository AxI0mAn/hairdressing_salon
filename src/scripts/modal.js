export default function modal() {
  const modal = document.querySelector('.modal');
  const btnsOpen = document.querySelectorAll('.open_now');
  const btnsClose = document.querySelector('#close_now');
  for (let btn of btnsOpen) {
    btn.addEventListener('click', () => {
      modal.classList.toggle('modal_show');
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
