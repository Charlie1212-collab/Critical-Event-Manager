import { useEffect, useState, useCallback, useRef } from 'react';
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
            units?: {
                [key: string]: {
                    factor: number;
                    display: string;
                    decimals: number;
                };
            };
            // Add additional measure events
            measurestart?: () => void;
            measurefinish?: () => void;
            measurecancel?: () => void;
        }

        class Measure extends Control {
            constructor(options?: MeasureOptions);
            // Add methods for interacting with the measure control
            enable(): void;
            disable(): void;
        }
    }

    namespace control {
        function measure(options?: Control.MeasureOptions): Control.Measure;
    }
}

interface MapRulerControlProps {
    position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
    primaryLengthUnit?: 'feet' | 'meters' | 'miles' | 'kilometers' | 'yards' | 'nautical-miles';
    secondaryLengthUnit?: 'feet' | 'meters' | 'miles' | 'kilometers' | 'yards' | 'nautical-miles' | null;
    primaryAreaUnit?: 'acres' | 'hectares' | 'sqfeet' | 'sqmeters' | 'sqmiles' | 'sqkilometers' | 'sqyards';
    secondaryAreaUnit?: 'acres' | 'hectares' | 'sqfeet' | 'sqmeters' | 'sqmiles' | 'sqkilometers' | 'sqyards' | null;
    activeColor?: string;
    completedColor?: string;
    theme?: 'light' | 'dark' | 'custom';
    customColors?: {
        buttonBackground?: string;
        buttonText?: string;
        activeButtonBackground?: string;
        activeButtonText?: string;
        measureLine?: string;
        measureArea?: string;
    };
}

export default function MapRulerControl({
    position = 'topright',
    primaryLengthUnit = 'miles',
    secondaryLengthUnit = 'kilometers',
    primaryAreaUnit = 'acres',
    secondaryAreaUnit = 'hectares',
    activeColor = '#ff6b6b',
    completedColor = '#ff9f43',
    theme = 'dark',
    customColors
}: MapRulerControlProps) {
    const map = useMap();
    const measureControlRef = useRef<L.Control.Measure | null>(null);
    const isActiveRef = useRef<boolean>(false);
    const [isMeasuring, setIsMeasuring] = useState(false);

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

        // Define theme-based colors
        const themeColors = {
            light: {
                buttonBackground: '#ffffff',
                buttonText: '#333333',
                activeButtonBackground: '#4D90FE',
                activeButtonText: '#ffffff',
                measureLine: '#4D90FE',
                measureArea: '#63B5F8'
            },
            dark: {
                buttonBackground: '#2d3748',
                buttonText: '#e2e8f0',
                activeButtonBackground: '#ff6b6b',
                activeButtonText: '#ffffff',
                measureLine: '#ff6b6b',
                measureArea: '#ff9f43'
            },
            custom: {
                buttonBackground: customColors?.buttonBackground || '#2d3748',
                buttonText: customColors?.buttonText || '#e2e8f0',
                activeButtonBackground: customColors?.activeButtonBackground || '#ff6b6b',
                activeButtonText: customColors?.activeButtonText || '#ffffff',
                measureLine: customColors?.measureLine || '#ff6b6b',
                measureArea: customColors?.measureArea || '#ff9f43'
            }
        };

        // Select the appropriate color scheme
        const colors = themeColors[theme];

        // Create custom CSS for the measure button to indicate active state
        const style = document.createElement('style');
        style.textContent = `
            .leaflet-control-measure {
                border-radius: 6px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                cursor: pointer;
                background-color: ${colors.buttonBackground};
                transition: all 0.2s ease;
            }
            .leaflet-control-measure a {
                color: ${colors.buttonText} !important;
                font-weight: 600;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                height: 30px;
            }
            .leaflet-control-measure.active {
                background-color: ${colors.activeButtonBackground} !important;
                transform: scale(1.05);
            }
            .leaflet-control-measure.active a {
                color: ${colors.activeButtonText} !important;
            }
            /* Override default cursor on map when measuring */
            .leaflet-container.measuring-active {
                cursor: crosshair !important;
            }
            /* Prevent map dragging during measurement */
            .leaflet-container.measuring-active .leaflet-pane {
                pointer-events: none;
            }
            .leaflet-container.measuring-active .leaflet-measure-path,
            .leaflet-container.measuring-active .leaflet-popup,
            .leaflet-container.measuring-active .leaflet-interactive,
            .leaflet-container.measuring-active .leaflet-marker-icon {
                pointer-events: auto !important;
            }
            /* Measure overlay */
            #measure-overlay {
                pointer-events: auto !important;
                cursor: crosshair !important;
                z-index: 9999 !important;
                background: transparent;
            }
            /* Enhanced styling for measurement tool markers */
            .leaflet-measure-resultpopup {
                z-index: 9999 !important;
                border-radius: 8px;
                box-shadow: 0 3px 14px rgba(0,0,0,0.4);
                padding: 8px !important;
                background-color: ${theme === 'dark' ? '#1a202c' : '#ffffff'};
                color: ${theme === 'dark' ? '#e2e8f0' : '#333333'};
                border: ${theme === 'dark' ? '1px solid #4a5568' : '1px solid #cbd5e0'};
            }
            .leaflet-measure-resultpopup .leaflet-popup-content-wrapper {
                background-color: ${theme === 'dark' ? '#1a202c' : '#ffffff'};
                color: ${theme === 'dark' ? '#e2e8f0' : '#333333'};
            }
            .leaflet-measure-resultpopup .leaflet-popup-content {
                margin: 6px 10px;
                line-height: 1.5;
            }
            .leaflet-measure-resultpopup h3 {
                font-weight: 600;
                margin: 0 0 5px;
                font-size: 14px;
            }
            .leaflet-measure-resultpopup p {
                margin: 0;
                font-size: 12px;
            }
            /* Measurement visualizations */
            .leaflet-measure-path {
                stroke: ${colors.measureLine};
                stroke-width: 3;
                stroke-opacity: 0.8;
                fill-opacity: 0.2;
                fill: ${colors.measureArea};
                pointer-events: auto !important;
            }
            .leaflet-measure-point {
                fill: ${colors.measureLine};
                stroke: #ffffff;
                stroke-width: 1;
                pointer-events: auto !important;
            }

            /* Measure tool vertices/handles */
            .leaflet-measure-vertex {
                background-color: ${colors.measureLine};
                border: 2px solid white;
                border-radius: 10px;
                width: 10px !important;
                height: 10px !important;
                cursor: move;
                pointer-events: auto !important;
            }
            .leaflet-measure-move {
                cursor: move;
            }
            .leaflet-measure-interact {
                pointer-events: auto !important;
            }
            
            /* Done button styling */
            .measure-control-buttons {
                position: absolute;
                top: 10px;
                right: 10px;
                z-index: 1000;
            }
            .measure-control-done-btn {
                font-size: 14px;
                font-weight: 500;
                border-radius: 4px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                transition: all 0.2s ease;
            }
            .measure-control-done-btn:hover {
                transform: translateY(-1px);
                box-shadow: 0 3px 6px rgba(0,0,0,0.3);
                background-color: ${theme === 'dark' ? '#596780' : '#cbd5e0'} !important;
            }
        `;
        document.head.appendChild(style);

        // Define custom units
        const customUnits = {
            'nautical-miles': {
                factor: 0.000539957,  // conversion from meters to nautical miles
                display: 'nmi',
                decimals: 2
            },
            'yards': {
                factor: 1.09361,  // conversion from meters to yards
                display: 'yd',
                decimals: 0
            },
            'sqyards': {
                factor: 1.19599,  // conversion from square meters to square yards
                display: 'sq yd',
                decimals: 0
            }
        };

        // Handler functions for measurement events
        function disableMapInteractions() {
            if (map && map.dragging) {
                map.dragging.disable();
                map.doubleClickZoom.disable();
                map.scrollWheelZoom.disable();
                if (map.touchZoom) map.touchZoom.disable();
                map.boxZoom.disable();
                if (map.keyboard) map.keyboard.disable();

                // Important: Add this class for cursor styling and to prevent other handlers
                const container = map.getContainer();
                container.classList.add('measuring-active');

                // Add a transparent overlay to intercept unwanted events
                let overlay = document.getElementById('measure-overlay');
                if (!overlay) {
                    overlay = document.createElement('div');
                    overlay.id = 'measure-overlay';
                    (overlay as HTMLElement).style.position = 'absolute';
                    (overlay as HTMLElement).style.top = '0';
                    (overlay as HTMLElement).style.left = '0';
                    (overlay as HTMLElement).style.width = '100%';
                    (overlay as HTMLElement).style.height = '100%';
                    (overlay as HTMLElement).style.zIndex = '1000';
                    (overlay as HTMLElement).style.pointerEvents = 'none';
                    container.appendChild(overlay);
                }

                isActiveRef.current = true;
                setIsMeasuring(true);
            }
        }

        function restoreMapInteractions() {
            if (map) {
                if (originalHandlers.dragging) map.dragging.enable();
                if (originalHandlers.doubleClickZoom) map.doubleClickZoom.enable();
                if (originalHandlers.scrollWheelZoom) map.scrollWheelZoom.enable();
                if (map.touchZoom && originalHandlers.touchZoom) map.touchZoom.enable();
                if (originalHandlers.boxZoom) map.boxZoom.enable();
                if (map.keyboard && originalHandlers.keyboard) map.keyboard.enable();

                // Remove the measuring-active class
                map.getContainer().classList.remove('measuring-active');

                // Remove the overlay
                const overlay = document.getElementById('measure-overlay');
                if (overlay) overlay.remove();

                isActiveRef.current = false;
                setIsMeasuring(false);
            }
        }

        // Create the measurement control with enhanced options
        const measureControl = new L.Control.Measure({
            position: position,
            primaryLengthUnit: primaryLengthUnit,
            secondaryLengthUnit: secondaryLengthUnit || undefined,
            primaryAreaUnit: primaryAreaUnit,
            secondaryAreaUnit: secondaryAreaUnit || undefined,
            activeColor: colors.measureLine,
            completedColor: colors.measureArea,
            popupOptions: {
                className: 'leaflet-measure-resultpopup',
                autoPanPadding: [10, 10]
            },
            captureZIndex: 10000,
            localization: 'en',
            decPoint: '.',
            thousandsSep: ',',
            units: customUnits
        });

        measureControlRef.current = measureControl;

        // Add direct event capture to prevent map dragging during measurement
        const mapContainer = map.getContainer();
        const captureEvents = ['mousedown', 'touchstart', 'mouseup', 'touchend'];

        const originalMapEvents: Record<string, EventListener | null> = {};

        // Store original listeners
        captureEvents.forEach(eventName => {
            originalMapEvents[eventName] = (mapContainer as any)[`on${eventName}`] as EventListener | null;
        });

        // Create event handler to check for active measurement
        const eventHandler = (e: Event) => {
            if (isActiveRef.current) {
                // Allow events on measurement elements
                const target = e.target as HTMLElement;
                const isOnMeasurement = target.classList && (
                    target.classList.contains('leaflet-measure-path') ||
                    target.classList.contains('leaflet-measure-vertex') ||
                    target.classList.contains('leaflet-measure-point') ||
                    target.classList.contains('leaflet-popup') ||
                    target.closest('.leaflet-measure-resultpopup') ||
                    target.closest('.leaflet-measure-path')
                );

                if (!isOnMeasurement && e.type === 'mousedown') {
                    // This is a click to place a measurement point, prevent map drag
                    map.dragging.disable();
                    e.stopPropagation();
                }
            }
        };

        // Attach the capture events to the map container
        captureEvents.forEach(eventName => {
            mapContainer.addEventListener(eventName, eventHandler, true);
        });

        // Also prevent the map from getting focus when measuring
        map.getContainer().addEventListener('click', (e) => {
            if (isActiveRef.current) {
                const target = e.target as HTMLElement;
                if (!target.closest('.leaflet-control') && !target.closest('.leaflet-measure-resultpopup')) {
                    e.preventDefault();
                    // Make sure dragging is disabled
                    map.dragging.disable();
                }
            }
        }, true);

        // Add the control to the map
        measureControl.addTo(map);

        // Listen for Leaflet measure events using the map instance
        map.on('measurestart', () => {
            disableMapInteractions();
        });

        map.on('measurefinish', () => {
            // We don't want to immediately re-enable map interactions
            // as users might want to view the measurement
        });

        // Direct event listener for the measure button
        function setupMeasureButtonListener() {
            const measureButton = document.querySelector('.leaflet-control-measure a');
            if (measureButton) {
                measureButton.addEventListener('click', (e) => {
                    // Use a timeout to check if the button became active
                    setTimeout(() => {
                        const isActive = document.querySelector('.leaflet-control-measure')?.classList.contains('active');

                        if (isActive && !isActiveRef.current) {
                            disableMapInteractions();
                        } else if (!isActive && isActiveRef.current) {
                            restoreMapInteractions();
                        }
                    }, 50);
                });

                // Create done/cancel buttons
                const controlContainer = document.querySelector('.leaflet-control-container');
                if (controlContainer && !document.querySelector('.measure-control-done-btn')) {
                    const buttonsContainer = document.createElement('div');
                    buttonsContainer.className = 'measure-control-buttons leaflet-control';
                    (buttonsContainer as HTMLElement).style.display = 'none';
                    (buttonsContainer as HTMLElement).style.position = 'absolute';
                    (buttonsContainer as HTMLElement).style.zIndex = '1000';
                    (buttonsContainer as HTMLElement).style.top = '10px';
                    (buttonsContainer as HTMLElement).style.right = '10px';

                    const doneButton = document.createElement('button');
                    doneButton.className = 'measure-control-done-btn';
                    doneButton.textContent = 'Done';
                    (doneButton as HTMLElement).style.padding = '6px 12px';
                    (doneButton as HTMLElement).style.backgroundColor = theme === 'dark' ? '#4a5568' : '#e2e8f0';
                    (doneButton as HTMLElement).style.color = theme === 'dark' ? '#e2e8f0' : '#2d3748';
                    (doneButton as HTMLElement).style.border = 'none';
                    (doneButton as HTMLElement).style.borderRadius = '4px';
                    (doneButton as HTMLElement).style.marginRight = '8px';
                    (doneButton as HTMLElement).style.cursor = 'pointer';
                    doneButton.addEventListener('click', () => {
                        restoreMapInteractions();
                        (buttonsContainer as HTMLElement).style.display = 'none';

                        // Remove the active class from the measure button
                        const measureBtn = document.querySelector('.leaflet-control-measure');
                        if (measureBtn) measureBtn.classList.remove('active');
                    });

                    buttonsContainer.appendChild(doneButton);
                    controlContainer.appendChild(buttonsContainer);

                    // Show/hide the buttons container when measurement state changes
                    setIsMeasuring(isActive => {
                        (buttonsContainer as HTMLElement).style.display = isActive ? 'block' : 'none';
                        return isActive;
                    });
                }
            } else {
                setTimeout(setupMeasureButtonListener, 100);
            }
        }

        setupMeasureButtonListener();

        // Also observe the DOM for "active" class changes
        const targetNode = document.querySelector('.leaflet-control-container');
        if (targetNode) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' || mutation.type === 'childList') {
                        const measureBtn = document.querySelector('.leaflet-control-measure');
                        const isActive = measureBtn?.classList.contains('active');

                        // Show/hide the done button
                        const buttonsContainer = document.querySelector('.measure-control-buttons');
                        if (buttonsContainer) {
                            (buttonsContainer as HTMLElement).style.display = isActive ? 'block' : 'none';
                        }

                        // Update state based on the active class
                        if (isActive && !isActiveRef.current) {
                            disableMapInteractions();
                        } else if (!isActive && isActiveRef.current) {
                            restoreMapInteractions();
                        }
                    }
                });
            });

            observer.observe(targetNode, {
                attributes: true,
                childList: true,
                subtree: true
            });

            return () => {
                observer.disconnect();
                document.head.removeChild(style);

                // Clean up event listeners
                map.off('measurestart');
                map.off('measurefinish');

                // Remove the measure control
                measureControl.remove();

                // Remove the done/cancel buttons
                const buttonsContainer = document.querySelector('.measure-control-buttons');
                if (buttonsContainer) {
                    buttonsContainer.remove();
                }
            };
        }

        return () => {
            document.head.removeChild(style);
            measureControl.remove();

            // Remove the done/cancel buttons
            const buttonsContainer = document.querySelector('.measure-control-buttons');
            if (buttonsContainer) {
                buttonsContainer.remove();
            }
        };
    }, [map, position, primaryLengthUnit, secondaryLengthUnit, primaryAreaUnit, secondaryAreaUnit, activeColor, completedColor, theme, customColors]);

    // This component doesn't render anything directly
    return null;
}