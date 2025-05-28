/**
 * Send a Google Analytics event
 * @param {string} eventName - The name of the event
 * @param {Object} eventParams - Additional parameters for the event
 */
export function sendAnalyticsEvent(eventName, eventParams = {}) {
  // Check if dataLayer is available (Google Analytics is loaded)
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams
    });
  }
}
