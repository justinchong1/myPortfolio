const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const footer = document.querySelector('footer');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');

  // Change the icon based on the mode
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️'; // Sun icon for light mode
  } else {
    darkModeToggle.textContent = '🌙'; // Moon icon for dark mode
  }
});
