import React, { useState, useEffect } from 'react';
import { CloudLightning, Cloud, Droplets, Wind, ThermometerSun, AlertTriangle, XCircle } from 'lucide-react';

type WeatherAlert = {
    event: string;
    description: string;
    start: number;
    end: number;
};

type WeatherData = {
    location: string;
    temperature: number;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
    alerts?: WeatherAlert[];
    timestamp: number;
};

export default function RealTimeWeatherMonitor() {
    const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<string>('');
    const [selectedAlert, setSelectedAlert] = useState<WeatherAlert | null>(null);
    const [activeLocation, setActiveLocation] = useState<string | null>(null);

    const fetchWeatherData = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/weather?multiple=true');

            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }

            const data = await response.json();
            setWeatherData(data);
            setLastUpdated(new Date().toLocaleTimeString());
            setError(null);
        } catch (err) {
            console.error('Error fetching weather data:', err);
            setError('Failed to load weather data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherData();

        // Set up polling every 5 minutes (300000 ms)
        const intervalId = setInterval(() => {
            fetchWeatherData();
        }, 300000);

        return () => clearInterval(intervalId);
    }, []);

    const getWeatherIcon = (iconCode: string) => {
        // Map OpenWeatherMap icon codes to Lucide icons
        if (iconCode.includes('01')) return <ThermometerSun className="h-6 w-6 text-amber-400" />; // clear sky
        if (iconCode.includes('02') || iconCode.includes('03') || iconCode.includes('04')) return <Cloud className="h-6 w-6 text-gray-400" />; // clouds
        if (iconCode.includes('09') || iconCode.includes('10')) return <Droplets className="h-6 w-6 text-blue-400" />; // rain
        if (iconCode.includes('11')) return <CloudLightning className="h-6 w-6 text-indigo-400" />; // thunderstorm
        if (iconCode.includes('13')) return <Cloud className="h-6 w-6 text-white" />; // snow
        if (iconCode.includes('50')) return <Wind className="h-6 w-6 text-gray-300" />; // mist
        return <Cloud className="h-6 w-6 text-gray-400" />; // default
    };

    // Function to determine temperature-based styling
    const getTempColorClass = (temp: number) => {
        if (temp >= 90) return 'text-red-500';
        if (temp >= 80) return 'text-orange-500';
        if (temp >= 70) return 'text-amber-500';
        if (temp >= 60) return 'text-yellow-500';
        if (temp >= 50) return 'text-green-500';
        if (temp >= 40) return 'text-cyan-500';
        return 'text-blue-500';
    };

    // Format timestamp for alerts
    const formatAlertTime = (timestamp: number): string => {
        return new Date(timestamp).toLocaleString([], {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Opens the alert details modal
    const openAlertDetails = (alert: WeatherAlert, location: string) => {
        setSelectedAlert(alert);
        setActiveLocation(location);
    };

    // Closes the alert details modal
    const closeAlertDetails = () => {
        setSelectedAlert(null);
        setActiveLocation(null);
    };

    if (loading && weatherData.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-6">
                <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent mb-3"></div>
                <p className="text-dark-700">Loading weather data...</p>
            </div>
        );
    }

    if (error && weatherData.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <AlertTriangle className="h-8 w-8 text-amber-500 mb-3" />
                <p className="text-dark-700">{error}</p>
                <button
                    onClick={fetchWeatherData}
                    className="mt-3 px-3 py-1 bg-dark-300/70 hover:bg-dark-300 rounded-md transition-colors text-sm"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-dark-300/30">
                <h3 className="text-sm font-medium text-dark-700">Latest Weather Conditions</h3>
                <div className="flex items-center">
                    <button
                        onClick={fetchWeatherData}
                        className="p-1 rounded hover:bg-dark-300/30 transition-colors"
                        title="Refresh weather data"
                    >
                        <svg className="h-3.5 w-3.5 text-dark-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </button>
                    <span className="text-xs text-dark-700 ml-2">
                        Updated: {lastUpdated || 'Never'}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-y-auto pb-2">
                {weatherData.map((city, index) => (
                    <div key={index} className="bg-dark-200/50 rounded-lg p-3 transition-all hover:bg-dark-200/70">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-medium">{city.location}</h4>
                                <p className="text-sm text-dark-700 capitalize">{city.description}</p>
                            </div>
                            <div className="flex items-center">
                                {getWeatherIcon(city.icon)}
                                <span className={`text-xl font-bold ml-1 ${getTempColorClass(city.temperature)}`}>
                                    {city.temperature}°F
                                </span>
                            </div>
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-1 text-xs text-dark-700">
                            <div className="flex items-center">
                                <Droplets className="h-3 w-3 mr-1" /> Humidity: {city.humidity}%
                            </div>
                            <div className="flex items-center">
                                <Wind className="h-3 w-3 mr-1" /> Wind: {city.windSpeed} mph
                            </div>
                        </div>

                        {city.alerts && city.alerts.length > 0 && (
                            <div className="mt-2 pt-2 border-t border-dark-300/30">
                                {city.alerts.map((alert, alertIndex) => (
                                    <div key={alertIndex} className="bg-amber-500/20 p-2 rounded text-xs mt-1">
                                        <div className="flex items-center">
                                            <AlertTriangle className="h-3 w-3 text-amber-500 mr-1" />
                                            <span className="font-medium">{alert.event}</span>
                                        </div>
                                        <button
                                            onClick={() => openAlertDetails(alert, city.location)}
                                            className="mt-1 text-blue-400 hover:text-blue-300 text-xs transition-colors"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {weatherData.length === 0 && !loading && !error && (
                <div className="flex flex-col items-center justify-center flex-1 text-dark-700">
                    <p>No weather data available</p>
                </div>
            )}

            {/* Weather Alert Details Modal */}
            {selectedAlert && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
                    <div className="bg-dark-100 rounded-lg shadow-lg max-w-md w-full p-4 max-h-[80vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-lg font-medium flex items-center">
                                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                                Weather Alert: {activeLocation}
                            </h3>
                            <button
                                onClick={closeAlertDetails}
                                className="text-dark-700 hover:text-dark-900 transition-colors"
                            >
                                <XCircle className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="space-y-3">
                            <div className="bg-dark-200 p-3 rounded">
                                <h4 className="font-medium mb-1 text-amber-500">{selectedAlert.event}</h4>
                                <p className="text-sm">{selectedAlert.description}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div className="bg-dark-200 p-2 rounded">
                                    <h5 className="text-xs text-dark-700 mb-1">Starts</h5>
                                    <p>{formatAlertTime(selectedAlert.start)}</p>
                                </div>
                                <div className="bg-dark-200 p-2 rounded">
                                    <h5 className="text-xs text-dark-700 mb-1">Ends</h5>
                                    <p>{formatAlertTime(selectedAlert.end)}</p>
                                </div>
                            </div>

                            <div className="bg-dark-200 p-3 rounded text-sm">
                                <h5 className="text-xs text-dark-700 mb-1">Recommended Action</h5>
                                <p>Follow local emergency protocols. Monitor official channels for updates.</p>
                            </div>
                        </div>

                        <button
                            onClick={closeAlertDetails}
                            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}