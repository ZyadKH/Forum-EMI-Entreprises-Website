// Get the initial scroll position
let lastScrollPosition = window.scrollY;

// Function to handle scroll event
function handleScroll() {
  // Get the current scroll position
  const currentScrollPosition = window.scrollY;
  const navbar = document.querySelector('.NavBar');

  // Check if scrolling down
  if (currentScrollPosition > lastScrollPosition) {
    // Add the 'fade-out' class to the navbar
    navbar.classList.add('fade-out');
    // Disable pointer events on the navbar
    navbar.style.pointerEvents = 'none';
  } else {
    // Remove the 'fade-out' class from the navbar
    navbar.classList.remove('fade-out');
    // Enable pointer events on the navbar
    navbar.style.pointerEvents = 'auto';
  }

  // Update the last scroll position
  lastScrollPosition = currentScrollPosition;
}

// Attach the 'handleScroll' function to the scroll event
window.addEventListener('scroll', handleScroll);
