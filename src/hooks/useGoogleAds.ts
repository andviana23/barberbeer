
// /src/hooks/useGoogleAds.ts

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGoogleAds } from '../services/googleAds';

interface UseGoogleAdsParams {
  hasConsent: boolean;
}

/**
 * React hook to initialize the Google Ads script on route changes.
 *
 * It listens to location changes and calls the initialization service,
 * which then checks for consent and if the route is allowed.
 *
 * @param {object} params
 * @param {boolean} params.hasConsent - User consent status.
 */
export const useGoogleAds = ({ hasConsent }: UseGoogleAdsParams) => {
  const location = useLocation();

  useEffect(() => {
    initGoogleAds(hasConsent);
  }, [location.pathname, hasConsent]); // Re-run on path or consent change
};
