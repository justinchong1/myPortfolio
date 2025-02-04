// Password Protection
const passwordSection = document.getElementById('password-section');
const contentSection = document.getElementById('content-section');
const passwordInput = document.getElementById('password-input');
const unlockButton = document.getElementById('unlock-button');
const errorMessage = document.getElementById('error-message');

// Set your password here
const correctPassword = '1234';

// Check if the user has already unlocked the website
if (sessionStorage.getItem('unlocked') === 'true') {
  passwordSection.style.display = 'none';
  contentSection.style.display = 'block';
}

unlockButton.addEventListener('click', () => {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === correctPassword) {
    // Hide password section and show content
    passwordSection.style.display = 'none';
    contentSection.style.display = 'block';

    // Store the unlocked state in session storage
    sessionStorage.setItem('unlocked', 'true');
  } else {
    // Show error message
    errorMessage.style.display = 'block';
  }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const footer = document.querySelector('footer');

// Check local storage for dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  footer.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️'; // Sun icon for light mode
} else {
  darkModeToggle.textContent = '🌙'; // Moon icon for dark mode
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');

  // Change the icon based on the mode
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️'; // Sun icon for light mode
    localStorage.setItem('dark-mode', 'enabled'); // Save dark mode preference
  } else {
    darkModeToggle.textContent = '🌙'; // Moon icon for dark mode
    localStorage.setItem('dark-mode', 'disabled'); // Save light mode preference
  }
});
