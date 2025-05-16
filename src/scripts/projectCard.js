/**
 * projectCard.js
 * This file contains JavaScript functions for project card functionality
 */

// Function to setup project card description toggle
function setupProjectCardToggle() {
  const toggleButtons = document.querySelectorAll('.toggle-description');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const projectCard = button.closest('.project-card');
      const fullDescription = projectCard.querySelector('.full-description');
      const arrowIcon = button.querySelector('i');
      const buttonText = button.querySelector('span');
      const isExpanded = fullDescription.classList.contains('expanded');

      if (isExpanded) {
        // Collapse
        fullDescription.style.maxHeight = '0';
        fullDescription.style.opacity = '0';
        fullDescription.classList.remove('expanded');
        buttonText.textContent = 'Read more';
        arrowIcon.style.transform = 'rotate(0deg)';
      } else {
        // Expand
        fullDescription.style.maxHeight = fullDescription.scrollHeight + 'px';
        fullDescription.style.opacity = '1';
        fullDescription.classList.add('expanded');
        buttonText.textContent = 'Show less';
        arrowIcon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// Initialize project card toggle functionality when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  setupProjectCardToggle();
});
