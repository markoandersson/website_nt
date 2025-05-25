/**
 * Analytics Tracker for Component Visibility
 * 
 * This script uses the Intersection Observer API to track when components become visible
 * in the viewport and how long they remain visible. It sends events to Google Analytics
 * via Google Tag Manager's dataLayer.
 */

// Store timing information for components
const componentTimings = new Map();

/**
 * Initialize tracking for a component
 * @param {string} componentId - The ID of the component to track
 * @param {string} componentName - The name of the component for analytics
 * @param {Element} element - The DOM element to observe
 * @param {Object} options - Additional options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.5
 * @param {number} options.timeInterval - Interval to update time spent (ms), default 5000
 */
export function trackComponentVisibility(componentId, componentName, element, options = {}) {
  const threshold = options.threshold || 0.5;
  const timeInterval = options.timeInterval || 5000;
  
  if (!element) {
    console.error(`Element not found for component: ${componentName}`);
    return;
  }

  // Initialize timing data
  componentTimings.set(componentId, {
    firstSeen: false,
    enteredViewport: null,
    timeVisible: 0,
    intervalId: null,
    lastUpdated: null
  });

  // Create an intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const timing = componentTimings.get(componentId);
        
        if (entry.isIntersecting) {
          // Component has entered the viewport
          if (!timing.firstSeen) {
            // First time seeing this component
            timing.firstSeen = true;
            
            // Send component impression event
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'component_impression',
              component_name: componentName,
              component_id: componentId
            });
          }
          
          // Start tracking time if not already tracking
          if (!timing.intervalId) {
            timing.enteredViewport = new Date();
            timing.lastUpdated = new Date();
            
            // Set up interval to periodically update time spent
            timing.intervalId = setInterval(() => {
              const now = new Date();
              const additionalTime = now - timing.lastUpdated;
              timing.timeVisible += additionalTime;
              timing.lastUpdated = now;
              
              // Send time spent update event every interval
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'component_time_update',
                component_name: componentName,
                component_id: componentId,
                time_visible_seconds: Math.round(timing.timeVisible / 1000),
                time_visible_interval_seconds: Math.round(additionalTime / 1000)
              });
            }, timeInterval);
          }
        } else if (timing.intervalId) {
          // Component has left the viewport
          clearInterval(timing.intervalId);
          
          // Calculate final time for this viewing session
          const now = new Date();
          const additionalTime = now - timing.lastUpdated;
          timing.timeVisible += additionalTime;
          
          // Send exit event with total time spent
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'component_exit',
            component_name: componentName,
            component_id: componentId,
            time_visible_seconds: Math.round(timing.timeVisible / 1000)
          });
          
          // Reset interval tracking
          timing.intervalId = null;
        }
      });
    },
    { threshold }
  );
  
  // Start observing the element
  observer.observe(element);
  
  return {
    disconnect: () => {
      // Clean up the observer and interval when no longer needed
      observer.disconnect();
      const timing = componentTimings.get(componentId);
      if (timing && timing.intervalId) {
        clearInterval(timing.intervalId);
      }
    }
  };
}