import { sendAnalyticsEvent } from '../utils/analytics.js';

document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.toggle-description');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const projectCard = this.closest('.project-card');
      const description = projectCard.querySelector('.full-description');
      const icon = this.querySelector('i');
      const buttonText = this.querySelector('span');
      const projectTitle = projectCard.querySelector('h3').textContent;
      
      const isExpanded = description.style.maxHeight !== '0px' && description.style.maxHeight !== '';
      
      // Toggle the expanded state
      if (!isExpanded) {
        description.style.maxHeight = description.scrollHeight + 'px';
        description.style.opacity = '1';
        buttonText.textContent = 'Read less';
        icon.classList.add('fa-rotate-180');
        
        // Send analytics event when expanding
        sendAnalyticsEvent('project_expanded', {
          project_title: projectTitle,
          section: 'projects'
        });
      } else {
        description.style.maxHeight = '0';
        description.style.opacity = '0';
        buttonText.textContent = 'Read more';
        icon.classList.remove('fa-rotate-180');
      }
    });
  });
});
