
// /src/services/googleAds.ts

/**
 * Configuration
 *
 * GOOGLE_ADS_ID: Your Google Ads measurement ID.
 * ALLOWED_ROUTES: Array of pathname strings where the tag should be active.
 */
const GOOGLE_ADS_ID = 'AW-469873042';
const ALLOWED_ROUTES = ['/agendamento']; // Example: ['/agendamento', '/contato']

// State to ensure the script is injected only once
let isGoogleAdsScriptLoaded = false;

/**
 * Type definition for the gtag function.
 */
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/**
 * Logs messages only in development environment.
 * @param message The message to log.
 * @param data Optional data to log.
 */
const logDev = (message: string, data?: any) => {
  if (import.meta.env.DEV) {
    console.log(`[Google Ads Tag]: ${message}`, data || '');
  }
};

/**
 * Checks if the current route is allowed for tracking.
 * @returns boolean
 */
const isRouteAllowed = (): boolean => {
  const currentPath = window.location.pathname;
  return ALLOWED_ROUTES.includes(currentPath);
};

/**
 * Injects the Google Ads script into the document's head.
 * Calls the config function upon successful script load.
 */
const injectScript = () => {
  logDev('Injecting script...');

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  script.async = true;

  script.onload = () => {
    isGoogleAdsScriptLoaded = true;
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      (window as any).dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GOOGLE_ADS_ID);
    logDev('Script loaded and config sent.');
  };

  script.onerror = () => {
    logDev('Error loading script.');
  };

  document.head.appendChild(script);
};

/**
 * Initializes the Google Ads tag based on consent and route.
 * This is the main function to be called on route changes.
 *
 * @param hasConsent A boolean indicating if the user has given consent.
 */
export const initGoogleAds = (hasConsent: boolean) => {
  if (!hasConsent) {
    logDev('Skipped: User has not provided consent.');
    return;
  }

  if (!isRouteAllowed()) {
    logDev(`Skipped: Current route "${window.location.pathname}" is not in ALLOWED_ROUTES.`);
    return;
  }

  if (isGoogleAdsScriptLoaded) {
    logDev('Skipped: Script already loaded.');
    return;
  }

  // Initialize dataLayer if it doesn't exist
  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  injectScript();
};

/**
 * Sends a conversion event to Google Ads.
 *
 * This function should only be called from allowed routes and after the script has been initialized.
 *
 * @param conversionLabel The 'send_to' label for the specific conversion action.
 *                        Example: 'AW-469873042/XYZ-ABCDEF123'
 * @param params Optional parameters for the conversion event.
 */
export const sendConversion = (conversionLabel: string, params?: object) => {
  if (!isGoogleAdsScriptLoaded) {
    logDev('Conversion not sent: Google Ads script is not loaded.');
    return;
  }
  if (!isRouteAllowed()) {
    logDev(`Conversion not sent: Current route "${window.location.pathname}" is not allowed.`);
    return;
  }

  logDev(`Sending conversion: ${conversionLabel}`, params);
  window.gtag('event', 'conversion', {
    send_to: conversionLabel,
    ...params,
  });
};
