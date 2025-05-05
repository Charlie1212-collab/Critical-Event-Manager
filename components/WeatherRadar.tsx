import React, { useEffect, useState, useRef } from 'react';
import { Cloud, RefreshCw, ZoomIn, ZoomOut, Layers } from 'lucide-react';

interface WeatherRadarProps {
    region?: string;
    zoom?: number;
    showControls?: boolean;
}

const WeatherRadar: React.FC<WeatherRadarProps> = ({
    region = 'us',
    zoom = 5,
    showControls = true
}) => {
    const [loading, setLoading] = useState(true);
    const [radarType, setRadarType] = useState<'reflectivity' | 'velocity' | 'composite'>('reflectivity');
    const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
    const [currentZoom, setCurrentZoom] = useState(zoom);
    const [isClient, setIsClient] = useState(false);

    // Direct radar image URL - this works more reliably than constructing WMS parameters
    const radarUrl = "https://radar.weather.gov/ridge/standard/CONUS_loop.gif";

    const radarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log('WeatherRadar useEffect running');
        setIsClient(true);

        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [region, radarType, currentZoom]);

    const refreshRadar = () => {
        setLoading(true);
        setLastUpdated(new Date());

        // Simulate refresh
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const changeRadarType = (type: 'reflectivity' | 'velocity' | 'composite') => {
        setRadarType(type);
        setLoading(true);
    };

    const zoomIn = () => {
        setCurrentZoom(prev => Math.min(prev + 1, 10));
    };

    const zoomOut = () => {
        setCurrentZoom(prev => Math.max(prev - 1, 1));
    };

    // Don't render anything during server-side rendering
    if (!isClient) {
        return (
            <div className="h-full w-full flex items-center justify-center">
                <div className="text-dark-700">Loading weather radar...</div>
            </div>
        );
    }

    return (
        <div className="h-full w-full flex flex-col">
            {showControls && (
                <div className="flex justify-between items-center mb-3">
                    <div className="flex space-x-2">
                        <button
                            onClick={() => changeRadarType('reflectivity')}
                            className={`px-3 py-1 text-xs rounded-md transition-colors ${radarType === 'reflectivity'
                                ? 'bg-blue-500/30 text-blue-400'
                                : 'bg-dark-300/50 text-dark-700 hover:bg-dark-300'
                                }`}
                        >
                            Reflectivity
                        </button>
                        <button
                            onClick={() => changeRadarType('velocity')}
                            className={`px-3 py-1 text-xs rounded-md transition-colors ${radarType === 'velocity'
                                ? 'bg-green-500/30 text-green-400'
                                : 'bg-dark-300/50 text-dark-700 hover:bg-dark-300'
                                }`}
                        >
                            Velocity
                        </button>
                        <button
                            onClick={() => changeRadarType('composite')}
                            className={`px-3 py-1 text-xs rounded-md transition-colors ${radarType === 'composite'
                                ? 'bg-purple-500/30 text-purple-400'
                                : 'bg-dark-300/50 text-dark-700 hover:bg-dark-300'
                                }`}
                        >
                            Composite
                        </button>
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={zoomOut}
                            className="p-1 bg-dark-300/50 hover:bg-dark-300 rounded-md transition-colors"
                            disabled={currentZoom <= 1}
                        >
                            <ZoomOut className="h-4 w-4 text-dark-400" />
                        </button>
                        <button
                            onClick={zoomIn}
                            className="p-1 bg-dark-300/50 hover:bg-dark-300 rounded-md transition-colors"
                            disabled={currentZoom >= 10}
                        >
                            <ZoomIn className="h-4 w-4 text-dark-400" />
                        </button>
                        <button
                            onClick={refreshRadar}
                            className="p-1 bg-dark-300/50 hover:bg-dark-300 rounded-md transition-colors"
                            disabled={loading}
                        >
                            <RefreshCw className={`h-4 w-4 text-blue-400 ${loading ? 'animate-spin' : ''}`} />
                        </button>
                    </div>
                </div>
            )}

            <div
                ref={radarRef}
                className="flex-1 rounded-lg bg-dark-300/30 border border-dark-300/50 relative overflow-hidden"
                style={{ minHeight: '300px' }}
            >
                {loading ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center">
                            <RefreshCw className="h-8 w-8 text-blue-500/70 animate-spin mb-2" />
                            <span className="text-sm text-dark-700">Loading radar data...</span>
                        </div>
                    </div>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0a192f] overflow-hidden">
                        {/* NOAA Radar animation directly from weather.gov - much more reliable */}
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                            {/* Radar image with proper CSS for responsive display */}
                            <img
                                src={radarUrl}
                                alt="NOAA Weather Radar"
                                className="w-full h-full object-contain"
                                style={{
                                    transform: `scale(${currentZoom / 5})`,
                                    transition: 'transform 0.3s ease-in-out'
                                }}
                            />

                            {/* Overlay with radar legend */}
                            <div className="absolute bottom-3 right-3 bg-dark-800/80 p-2 rounded-md">
                                <div className="flex items-center mb-1">
                                    <div className="w-12 h-2 bg-gradient-to-r from-blue-400 to-red-500 rounded-sm mr-2"></div>
                                    <span className="text-xs text-dark-400">Intensity</span>
                                </div>
                                <div className="flex justify-between text-[10px] text-dark-500 px-0.5">
                                    <span>Low</span>
                                    <span>High</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {showControls && (
                <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-dark-700">Region: {region.toUpperCase()}</span>
                    <div className="flex items-center">
                        <Layers className="h-3 w-3 text-blue-500/60 mr-1" />
                        <span className="text-xs text-dark-700">
                            {radarType.charAt(0).toUpperCase() + radarType.slice(1)} •
                        </span>
                        <span className="text-xs text-dark-700 ml-1">
                            Last updated: {lastUpdated.toLocaleTimeString()}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherRadar;