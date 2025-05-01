/**
 * domManipulation.js
 * This file contains JavaScript functions for DOM manipulation and event listeners
 */

// Function to create navigation links based on section IDs
function createNavigationLinks() {
  // Get all sections with IDs
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navContainer = document.getElementById('navigation-links');

  if (sections.length > 0 && navContainer) {
    // Add Home link first if it exists
    const homeSection = sections.find(section => section.id === 'home');
    if (homeSection) {
      const homeLink = document.createElement('a');
      homeLink.href = '#home';
      homeLink.className = 'hover:text-accent-light mx-3';
      homeLink.textContent = 'Home';
      navContainer.appendChild(homeLink);

      // Remove home from sections array to avoid duplication
      const homeIndex = sections.indexOf(homeSection);
      if (homeIndex > -1) {
        sections.splice(homeIndex, 1);
      }
    }

    // Add the rest of the sections in the order they appear in the document
    sections.forEach(section => {
      // Create a link for each section
      const link = document.createElement('a');
      link.href = `#${section.id}`;
      link.className = 'hover:text-accent-light mx-3'; // Add horizontal margin for spacing

      // Format the section ID for display (capitalize first letter of each word)
      const displayName = section.id
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      link.textContent = displayName;
      navContainer.appendChild(link);
    });
  }
}

// Initialize all DOM manipulations when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  createNavigationLinks();
});

// Export functions for potential reuse
export { createNavigationLinks };
