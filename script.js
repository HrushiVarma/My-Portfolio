// Grab the button from the page
const themeBtn = document.getElementById('themeBtn');

// Listen for a click on the button
themeBtn.addEventListener('click', function() {

  // Toggle a 'light' class on the body
  document.body.classList.toggle('light');

  // Change button text depending on mode
  if (document.body.classList.contains('light')) {
    themeBtn.textContent = '🌙 Dark Mode';
  } else {
    themeBtn.textContent = '☀️ Light Mode';
  }

});