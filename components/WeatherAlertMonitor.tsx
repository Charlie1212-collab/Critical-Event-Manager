import React, { useState, useEffect } from 'react';
import { AlertTriangle, CloudLightning, Wind, Waves, Thermometer } from 'lucide-react';

type WeatherAlert = {
    event: string;
    description: string;
    start: number;
    end: number;
    sender: string;
    severity: string;
};

interface WeatherAlertsProps {
    cityName?: string;
    lat?: number;
    lon?: number;
    state?: string;
    refreshInterval?: number; // in milliseconds
}

export default function WeatherAlertMonitor({
    cityName,
    lat,
    lon,
    state = 'IL',
    refreshInterval = 300000 // 5 minutes default 
}: WeatherAlertsProps) {
    const [alerts, setAlerts] = useState<WeatherAlert[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<string>('');

    // Hard-coded alert examples for fallback
    const exampleAlerts = [
        {
            event: "Tornado Warning",
            description: "The National Weather Service has issued a tornado warning for this area. Take shelter immediately.",
            start: Date.now(),
            end: Date.now() + 3600000, // 1 hour from now
            sender: "NWS Chicago",
            severity: "Extreme"
        },
        {
            event: "Flash Flood Warning",
            description: "Flash flooding is occurring or imminent. Avoid flood areas and do not attempt to cross flowing water.",
            start: Date.now(),
            end: Date.now() + 7200000, // 2 hours from now
            sender: "NWS Miami",
            severity: "Severe"
        },
        {
            event: "Severe Thunderstorm Warning",
            description: "Severe thunderstorms capable of producing damaging winds and large hail. Seek shelter indoors.",
            start: Date.now(),
            end: Date.now() + 3600000, // 1 hour from now
            sender: "NWS Dallas",
            severity: "Severe"
        },
        {
            event: "Heat Advisory",
            description: "Heat index values up to 105 expected. Hot temperatures and high humidity may cause heat illnesses.",
            start: Date.now(),
            end: Date.now() + 86400000, // 24 hours from now
            sender: "NWS Phoenix",
            severity: "Moderate"
        }
    ];

    const fetchWeatherAlerts = async () => {
        try {
            setLoading(true);

            // First try to fetch from the NWS API directly
            let nwsAlerts: WeatherAlert[] = [];
            let usedFallback = false;

            try {
                // Determine which endpoint to use based on the provided props
                let nwsUrl = '';
                if (lat && lon) {
                    // Use point forecast if lat/lon provided
                    nwsUrl = `https://api.weather.gov/alerts/active?point=${lat},${lon}`;
                } else if (state) {
                    // Use state code if provided
                    nwsUrl = `https://api.weather.gov/alerts/active?area=${state}`;
                } else {
                    // Default to a major city if no location is specified
                    nwsUrl = 'https://api.weather.gov/alerts/active?area=IL';
                }

                // Fetch from NWS API
                const response = await fetch(nwsUrl, {
                    headers: {
                        'Accept': 'application/geo+json',
                        'User-Agent': '(criticaleventmanager.com, contact@example.com)',
                    }
                });

                if (!response.ok) {
                    throw new Error(`NWS API returned status ${response.status}`);
                }

                const data = await response.json();

                // Transform NWS data to our alert format
                if (data.features && data.features.length > 0) {
                    nwsAlerts = data.features.map((feature: any) => {
                        const props = feature.properties;
                        return {
                            event: props.event,
                            description: props.description || props.headline,
                            start: new Date(props.effective).getTime(),
                            end: new Date(props.expires).getTime(),
                            sender: props.senderName,
                            severity: props.severity
                        };
                    });
                }
            } catch (err) {
                console.error('Error fetching from NWS API directly:', err);

                // Fall back to our local API
                try {
                    const queryParams = cityName ? `city=${encodeURIComponent(cityName)}` :
                        (lat && lon) ? `lat=${lat}&lon=${lon}` : 'city=Chicago';

                    const response = await fetch(`/api/weather?${queryParams}`);

                    if (!response.ok) {
                        throw new Error('Failed to fetch weather alerts from local API');
                    }

                    const data = await response.json();

                    if (data.alerts && data.alerts.length > 0) {
                        nwsAlerts = data.alerts;
                    } else {
                        usedFallback = true;
                    }
                } catch (localErr) {
                    console.error('Error with local API fallback:', localErr);
                    usedFallback = true;
                }
            }

            // Use the fetched alerts or fall back to examples
            if (nwsAlerts.length > 0) {
                setAlerts(nwsAlerts);
                setError(null);
            } else {
                // In production, you might want to show "No active alerts"
                // But for demo purposes, we'll show example alerts
                setAlerts(exampleAlerts);
                if (usedFallback) {
                    setError('Could not fetch live weather alerts. Showing example alerts.');
                }
            }

            setLastUpdated(new Date().toLocaleTimeString());

        } catch (err) {
            console.error('Error fetching weather alerts:', err);
            // Fall back to example alerts in case of error
            setAlerts(exampleAlerts);
            setError('Could not fetch live weather alerts. Showing example alerts.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherAlerts();

        // Set up polling at the specified interval
        const intervalId = setInterval(() => {
            fetchWeatherAlerts();
        }, refreshInterval);

        return () => clearInterval(intervalId);
    }, [cityName, lat, lon, state, refreshInterval]);

    const getAlertIcon = (event: string) => {
        const eventLower = event.toLowerCase();
        if (eventLower.includes('tornado')) {
            return <CloudLightning className="h-5 w-5 text-purple-400 alert-icon-glow" />;
        } else if (eventLower.includes('flood')) {
            return <Waves className="h-5 w-5 text-blue-400 alert-icon-glow" />;
        } else if (eventLower.includes('storm') || eventLower.includes('thunder')) {
            return <CloudLightning className="h-5 w-5 text-blue-400 alert-icon-glow" />;
        } else if (eventLower.includes('wind') || eventLower.includes('hurricane')) {
            return <Wind className="h-5 w-5 text-teal-400 alert-icon-glow" />;
        } else if (eventLower.includes('heat') || eventLower.includes('temperature')) {
            return <Thermometer className="h-5 w-5 text-red-400 alert-icon-glow" />;
        }
        return <AlertTriangle className="h-5 w-5 text-amber-400 alert-icon-glow" />;
    };

    const getSeverityColor = (severity: string) => {
        const severityLower = severity.toLowerCase();
        if (severityLower.includes('extreme')) return 'text-red-500 bg-red-500/20';
        if (severityLower.includes('severe')) return 'text-orange-500 bg-orange-500/20';
        if (severityLower.includes('moderate')) return 'text-amber-500 bg-amber-500/20';
        return 'text-yellow-500 bg-yellow-500/20';
    };

    const formatTime = (timestamp: number) => {
        return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    if (loading && alerts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-6">
                <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent mb-3"></div>
                <p className="text-dark-700">Loading weather alerts...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-dark-300/30">
                <h3 className="text-sm font-medium text-dark-700">Active Weather Alerts</h3>
                <div className="flex items-center">
                    <button
                        onClick={fetchWeatherAlerts}
                        className="p-1 rounded hover:bg-dark-300/30 transition-colors"
                        title="Refresh alerts"
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

            {error && (
                <div className="mb-3 px-3 py-2 bg-amber-500/20 text-amber-500 rounded-lg text-xs">
                    {error}
                </div>
            )}

            {alerts.length > 0 ? (
                <div className="space-y-3 overflow-y-auto pb-2">
                    {alerts.map((alert, index) => (
                        <div key={index} className="bg-dark-200/50 rounded-lg p-3 animate-pulse-slow">
                            <div className="flex justify-between items-start">
                                <div className="flex items-start">
                                    <div className="mt-0.5 mr-2">{getAlertIcon(alert.event)}</div>
                                    <div>
                                        <h4 className="font-medium">{alert.event}</h4>
                                        <p className="text-xs text-dark-700">
                                            {formatTime(alert.start)} - {formatTime(alert.end)} • {alert.sender}
                                        </p>
                                    </div>
                                </div>
                                <span className={`px-2 py-1 text-xs rounded-full ${getSeverityColor(alert.severity)}`}>
                                    {alert.severity}
                                </span>
                            </div>
                            <p className="mt-2 text-sm text-dark-700 line-clamp-2">
                                {alert.description}
                            </p>
                            <button className="mt-2 text-xs px-2 py-1 bg-dark-300/70 hover:bg-dark-300 rounded transition-colors">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
                    <div className="bg-green-500/20 text-green-500 rounded-full p-3 mb-3">
                        <AlertTriangle className="h-6 w-6" />
                    </div>
                    <p className="text-dark-700">No active weather alerts</p>
                    <p className="text-xs text-dark-700 mt-1">All clear in your monitored areas</p>
                </div>
            )}
        </div>
    );
}