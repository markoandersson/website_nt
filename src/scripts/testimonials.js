/**
 * testimonials.js
 * This file contains JavaScript functions for testimonial carousel functionality
 */

// Function to setup testimonial carousel navigation
function setupTestimonialNavigation() {
  const container = document.getElementById('testimonials-container');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');

  if (container && prevBtn && nextBtn) {
    // Calculate the width of a single testimonial card plus margin
    const scrollAmount = () => {
      // On mobile and small screens, scroll full width
      if (window.innerWidth < 768) {
        return container.clientWidth;
      }
      // On medium screens and up, scroll 1/3 of the container width
      return container.clientWidth / 3;
    };

    // Scroll to previous testimonial
    prevBtn.addEventListener('click', () => {
      container.scrollBy({
        left: -scrollAmount(),
        behavior: 'smooth'
      });
    });

    // Scroll to next testimonial
    nextBtn.addEventListener('click', () => {
      container.scrollBy({
        left: scrollAmount(),
        behavior: 'smooth'
      });
    });
  }
}

// Initialize testimonial navigation when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  setupTestimonialNavigation();
});