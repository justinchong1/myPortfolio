const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const footer = document.querySelector('footer');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
});
