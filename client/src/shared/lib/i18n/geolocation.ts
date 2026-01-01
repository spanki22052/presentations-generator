import { Language } from '@/shared/contexts/I18nContext/types';

/**
 * Countries where Russian is commonly spoken
 */
const RUSSIAN_SPEAKING_COUNTRIES = new Set([
  'RU', // Russia
  'BY', // Belarus
  'KZ', // Kazakhstan
  'KG', // Kyrgyzstan
  'TJ', // Tajikistan
  'UZ', // Uzbekistan
  'AM', // Armenia
  'AZ', // Azerbaijan
  'GE', // Georgia
  'MD', // Moldova
  'UA', // Ukraine
]);

interface GeolocationResponse {
  country_code?: string;
  countryCode?: string;
  country?: string;
}

/**
 * Detects user's language based on their location (country code)
 * Uses free IP-based geolocation API
 * @returns Promise resolving to detected language or null if detection fails
 */
export async function detectLanguageByLocation(): Promise<Language | null> {
  try {
    // Using ip-api.com free service (no API key required, 45 requests/min)
    // Alternative: could use ipapi.co, ipgeolocation.io, etc.
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch('https://ip-api.com/json/?fields=countryCode', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Geolocation API error: ${response.status}`);
    }

    const data: GeolocationResponse = await response.json();
    const countryCode = data.countryCode || data.country_code;

    if (!countryCode || typeof countryCode !== 'string') {
      return null;
    }

    // Map country code to language
    const upperCountryCode = countryCode.toUpperCase();
    return RUSSIAN_SPEAKING_COUNTRIES.has(upperCountryCode) ? 'ru' : 'en';
  } catch (error) {
    // Silently fail - fallback to default language
    console.warn('Failed to detect language by location:', error);
    return null;
  }
}

