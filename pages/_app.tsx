import "../styles/globals.css";
import "leaflet/dist/leaflet.css"; // Add explicit Leaflet CSS import
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import MaterialTailwindThemeProviderWrapper from "../lib/theme/materialTailwindTheme";
import { ThemeProvider } from "../lib/theme/ThemeProvider";
import { validateImages, logImageError } from '../lib/utils/image-utils';

export default function App({ Component, pageProps }: AppProps) {
  // Validate critical images on app initialization
  useEffect(() => {
    const checkCriticalImages = async () => {
      // List of important images that should be validated on startup
      const criticalImages = [
        '/assets/backgroundImage.jpg',
        '/assets/background.jpg',
        '/assets/placeholder.png'
      ];

      try {
        const results = await validateImages(criticalImages);

        // Log any missing or problematic images
        Object.entries(results).forEach(([path, exists]) => {
          if (!exists) {
            logImageError(path, 'App Initialization');
            console.warn(`Critical image missing: ${path} - This may cause UI issues`);
          }
        });
      } catch (error) {
        console.error('Error validating images:', error);
      }
    };

    checkCriticalImages();
  }, []);

  return (
    <ThemeProvider>
      <MaterialTailwindThemeProviderWrapper>
        <Component {...pageProps} />
      </MaterialTailwindThemeProviderWrapper>
    </ThemeProvider>
  );
}