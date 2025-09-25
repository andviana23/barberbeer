
import { v4 as uuidv4 } from 'uuid';

// Interface to declare fbq function is available on window
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

/**
 * Initializes the Meta Pixel script.
 * Injects the script into the head of the document and initializes the pixel.
 */
export const init = () => {
  if (!META_PIXEL_ID) {
    console.warn('Meta Pixel ID is not defined. Tracking is disabled.');
    return;
  }

  // Inject the Meta Pixel script
  const script = document.createElement('script');
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
  `;
  document.head.appendChild(script);

  // Initialize the pixel and send a PageView event
  window.fbq('init', META_PIXEL_ID);
  trackEvent('PageView');
};

/**
 * Gets a cookie by name.
 */
const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
};

/**
 * Tracks a standard or custom event with Meta Pixel and sends it to the CAPI backend.
 * @param {string} eventName - The name of the event to track.
 * @param {object} [eventData={}] - Optional data associated with the event.
 * @param {object} [userData={}] - Optional raw user data (PII).
 */
export const trackEvent = async (
  eventName: string, 
  eventData: object = {},
  userData: object = {},
) => {
  if (!window.fbq) {
    console.warn('fbq is not initialized. Cannot track event.');
    return;
  }

  const eventId = uuidv4();

  // 1. Track event on the client-side via Pixel
  window.fbq('track', eventName, eventData, { eventID: eventId });

  // 2. Prepare and send event to the backend for Conversions API processing
  try {
    const payload = {
      eventName,
      eventId,
      eventData,
      userData,
      consentGiven: true, // TODO: Replace with actual consent management logic
      fbp: getCookie('_fbp'),
      fbc: getCookie('_fbc'),
      eventSourceUrl: window.location.href,
    };

    // NOTE: In a real app, the backend URL should come from an env variable
    await fetch('http://localhost:3000/api/meta/capi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

  } catch (error) {
    console.error('Failed to send event to CAPI backend:', error);
  }
};
