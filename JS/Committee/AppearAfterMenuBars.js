window.addEventListener('DOMContentLoaded', function() {
  // Get the trigger button and committee section elements
  const triggerButton = document.querySelector('.menu-trigger');
  const committeeSection = document.querySelector('.committee-section');

  // Insert the committee section element after the trigger button as a sibling
  triggerButton.insertAdjacentElement('afterend', committeeSection);
});
