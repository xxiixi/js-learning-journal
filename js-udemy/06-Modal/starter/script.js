'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// Open modal
const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// pass the functions as arguments
// click open
for (let i = 0; i < btnOpenModal.length; i++) {
  console.log(btnOpenModal[i].addEventListener('click', openModal));
}
// click close
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// key press event
// 'e' stands for: event
document.addEventListener('keydown', function (e) {
  //   console.log('key pressed');
  //   console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
