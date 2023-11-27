export default function modal() {
  const modal = document.querySelector('.modal');
  const btnsOpen = document.querySelectorAll('.open_now');
  const btnsClose = document.querySelector('#close_now');
  for (let btn of btnsOpen) {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
  btnsClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}
