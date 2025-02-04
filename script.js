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

// Password Protection
const passwordSection = document.getElementById('password-section');
const contentSection = document.getElementById('content-section');
const passwordInput = document.getElementById('password-input');
const unlockButton = document.getElementById('unlock-button');
const errorMessage = document.getElementById('error-message');

// Set your password here
const correctPassword = 'mysecretpassword';

unlockButton.addEventListener('click', () => {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === correctPassword) {
    // Hide password section and show content
    passwordSection.style.display = 'none';
    contentSection.style.display = 'block';
  } else {
    // Show error message
    errorMessage.style.display = 'block';
  }
});

// Dark Mode Toggle
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
