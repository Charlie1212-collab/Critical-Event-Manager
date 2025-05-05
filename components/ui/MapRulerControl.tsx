import { useEffect } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import 'leaflet-measure/dist/leaflet-measure.css';
import 'leaflet-measure';

// Declare the MeasureControl type since TypeScript definitions are not available
declare module 'leaflet' {
    namespace Control {
        interface MeasureOptions {
            position?: string;
            primaryLengthUnit?: string;
            secondaryLengthUnit?: string;
            primaryAreaUnit?: string;
            secondaryAreaUnit?: string;
            activeColor?: string;
            completedColor?: string;
            popupOptions?: {
                className?: string;
                autoPanPadding?: [number, number];
            };
            captureZIndex?: number;
            localization?: string;
            decPoint?: string;
            thousandsSep?: string;
        }

        class Measure extends Control {
            constructor(options?: MeasureOptions);
        }
    }

    namespace control {
        function measure(options?: Control.MeasureOptions): Control.Measure;
    }
}

interface MapRulerControlProps {
    position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
    primaryLengthUnit?: 'feet' | 'meters' | 'miles' | 'kilometers';
    secondaryLengthUnit?: 'feet' | 'meters' | 'miles' | 'kilometers' | null;
    primaryAreaUnit?: 'acres' | 'hectares' | 'sqfeet' | 'sqmeters' | 'sqmiles' | 'sqkilometers';
    activeColor?: string;
    completedColor?: string;
}

export default function MapRulerControl({
    position = 'topright',
    primaryLengthUnit = 'miles',
    secondaryLengthUnit = 'kilometers',
    primaryAreaUnit = 'acres',
    activeColor = '#4D90FE',
    completedColor = '#63B5F8'
}: MapRulerControlProps) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        // Store original handlers to restore later
        const originalHandlers = {
            dragging: map.dragging.enabled(),
            doubleClickZoom: map.doubleClickZoom.enabled(),
            scrollWheelZoom: map.scrollWheelZoom.enabled(),
            touchZoom: map.touchZoom?.enabled(),
            boxZoom: map.boxZoom.enabled(),
            keyboard: map.keyboard?.enabled(),
        };

        // Create custom CSS for the measure button to indicate active state
        const style = document.createElement('style');
        style.textContent = `
            .leaflet-control-measure {
                border-radius: 4px;
                cursor: pointer;
            }
            .leaflet-control-measure.active {
                background-color: #ffac45 !important;
            }
            .leaflet-control-measure.active a {
                color: #fff !important;
            }
            /* Override default cursor on map when measuring */
            .leaflet-container.measuring-active {
                cursor: crosshair !important;
            }
            /* Fix for measurement tool markers */
            .leaflet-measure-resultpopup {
                z-index: 9999 !important;
            }
        `;
        document.head.appendChild(style);

        // Create the measurement control
        const measureControl = new L.Control.Measure({
            position: position,
            primaryLengthUnit: primaryLengthUnit,
            secondaryLengthUnit: secondaryLengthUnit || undefined,
            primaryAreaUnit: primaryAreaUnit,
            activeColor: activeColor,
            completedColor: completedColor,
            popupOptions: {
                className: 'leaflet-measure-resultpopup',
                autoPanPadding: [10, 10]
            },
            captureZIndex: 10000,
            localization: 'en',
            decPoint: '.',
            thousandsSep: ','
        });

        // Add the control to the map
        measureControl.addTo(map);

        // Create a MutationObserver to watch for DOM changes
        // This is more reliable than click events for detecting when measure tool is activated
        const targetNode = document.querySelector('.leaflet-control-container');

        if (targetNode) {
            const observer = new MutationObserver((mutationsList) => {
                for (const mutation of mutationsList) {
                    if (mutation.type === 'attributes' || mutation.type === 'childList') {
                        // Check if measure control has active class
                        const measureButton = document.querySelector('.leaflet-control-measure');
                        const isActive = measureButton?.classList.contains('active');

                        if (isActive) {
                            // Disable ALL map interactions
                            map.dragging?.disable();
                            map.doubleClickZoom?.disable();
                            map.scrollWheelZoom?.disable();
                            map.touchZoom?.disable();
                            map.boxZoom?.disable();
                            map.keyboard?.disable();

                            // Add class to map container for cursor styling
                            map.getContainer().classList.add('measuring-active');
                        } else {
                            // Re-enable interactions based on original state
                            if (originalHandlers.dragging) map.dragging?.enable();
                            if (originalHandlers.doubleClickZoom) map.doubleClickZoom?.enable();
                            if (originalHandlers.scrollWheelZoom) map.scrollWheelZoom?.enable();
                            if (originalHandlers.touchZoom) map.touchZoom?.enable();
                            if (originalHandlers.boxZoom) map.boxZoom?.enable();
                            if (originalHandlers.keyboard) map.keyboard?.enable();
                            // Removed reference to 'tap' as it does not exist on 'Map'
                            map.getContainer().classList.remove('measuring-active');
                        }
                    }
                }
            });

            // Observe changes to the measure control's parent
            observer.observe(targetNode, {
                attributes: true,
                childList: true,
                subtree: true
            });

            // Also set up a direct event listener for the measure button
            const setupDirectListener = () => {
                const measureButton = document.querySelector('.leaflet-control-measure');
                if (measureButton) {
                    measureButton.addEventListener('click', function (this: HTMLElement, e) {
                        const isActive = this.classList.contains('active');

                        if (!isActive) {
                            // Button was just activated
                            setTimeout(() => {
                                map.dragging?.disable();
                                map.doubleClickZoom?.disable();
                                map.scrollWheelZoom?.disable();
                                map.touchZoom?.disable();
                                map.boxZoom?.disable();
                                map.keyboard?.disable();
                                // Removed reference to 'tap' as it does not exist on 'Map'
                                map.getContainer().classList.add('measuring-active');
                            }, 100); // Short delay for button state to update
                        } else {
                            // Button was deactivated
                            if (originalHandlers.dragging) map.dragging?.enable();
                            if (originalHandlers.doubleClickZoom) map.doubleClickZoom?.enable();
                            if (originalHandlers.scrollWheelZoom) map.scrollWheelZoom?.enable();
                            if (originalHandlers.touchZoom) map.touchZoom?.enable();
                            if (originalHandlers.boxZoom) map.boxZoom?.enable();
                            if (originalHandlers.keyboard) map.keyboard?.enable();
                            // Removed reference to 'tap' as it does not exist on 'Map'
                            map.getContainer().classList.remove('measuring-active');
                        }
                    });
                } else {
                    // If button not found yet, retry after a short delay
                    setTimeout(setupDirectListener, 100);
                }
            };

            // Initialize the direct listener
            setupDirectListener();

            // Clean up the observer on unmount
            return () => {
                observer.disconnect();
                document.head.removeChild(style);
                measureControl.remove();
            };
        }

        // If targetNode wasn't found, just clean up the control
        return () => {
            document.head.removeChild(style);
            measureControl.remove();
        };

    }, [map, position, primaryLengthUnit, secondaryLengthUnit, primaryAreaUnit, activeColor, completedColor]);

    // This component doesn't render anything directly
    return null;
}