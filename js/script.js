const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  nav.classList.toggle('show');
});

const hoursBtn = document.getElementById('hoursBtn');
const hours = document.getElementById('hours');

hoursBtn?.addEventListener('click', () => {
  hours.classList.toggle('hidden');
});
