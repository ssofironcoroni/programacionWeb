const openButtons = document.querySelectorAll('.open-modal');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.modal__close');

openButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const modalIndex = button.getAttribute('data-modal');
    modals[modalIndex].classList.add('modal--show');
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = button.closest('.modal');
    modal.classList.remove('modal--show');
  });
});
