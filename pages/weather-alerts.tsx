import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import MainLayout from "../components/MainLayout";
import {
    CloudLightning,
    CloudRain,
    Wind,
    Thermometer,
    Waves,
    Cloud,
    MapPin,
    Radar
} from "lucide-react";

// Import WeatherRadar directly for testing instead of using dynamic import
import WeatherRadar from "../components/WeatherRadar";

const HurricaneMap = dynamic(() => import("../components/HurricaneMap"), { ssr: false });
const RealTimeWeatherMonitor = dynamic(() => import("../components/RealTimeWeatherMonitor"), { ssr: false });
const WeatherAlertMonitor = dynamic(() => import("../components/WeatherAlertMonitor"), { ssr: false });

export default function WeatherAlerts() {
    // Client-side state for date values to prevent hydration mismatch
    const [currentYear, setCurrentYear] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [lastUpdated, setLastUpdated] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');

    // Weather event types for filter
    const weatherEventTypes = [
        { id: 'severe-storms', name: 'Severe Storms', icon: <CloudRain className="h-4 w-4 mr-1" /> },
        { id: 'lightning', name: 'Lightning', icon: <CloudLightning className="h-4 w-4 mr-1" /> },
        { id: 'high-winds', name: 'High Winds', icon: <Wind className="h-4 w-4 mr-1" /> },
        { id: 'extreme-temps', name: 'Extreme Temps', icon: <Thermometer className="h-4 w-4 mr-1" /> },
        { id: 'flooding', name: 'Flooding', icon: <Waves className="h-4 w-4 mr-1" /> },
        { id: 'air-quality', name: 'Air Quality', icon: <Cloud className="h-4 w-4 mr-1" /> }
    ];

    // Update date values only on the client side
    useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString());
        setCurrentTime(new Date().toLocaleTimeString());
        setLastUpdated(new Date().toLocaleString());
    }, []);

    // Handle filter change
    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
    };

    return (
        <MainLayout>
            <Head>
                <title>Critical Event Management - Weather Alerts</title>
            </Head>

            {/* Weather event types filter menu buttons at the top */}
            <div className="bg-dark-300/30 py-2 px-4 overflow-x-auto shadow-inner">
                <div className="container mx-auto flex items-center space-x-5 overflow-x-auto">
                    <button
                        className={`px-3 py-1.5 rounded-md text-sm flex items-center ${activeFilter === 'all'
                            ? "bg-blue-500 text-white"
                            : "bg-dark-300/50 text-dark-700 hover:bg-dark-300/80 hover:text-white"
                            } transition-colors`}
                        onClick={() => handleFilterChange('all')}
                    >
                        All Weather Events
                    </button>
                    {weatherEventTypes.map((eventType) => (
                        <button
                            key={eventType.id}
                            className={`px-3 py-1.5 rounded-md text-sm flex items-center ${activeFilter === eventType.id
                                ? "bg-blue-500 text-white"
                                : "bg-dark-300/50 text-dark-700 hover:bg-dark-300/80 hover:text-white"
                                } transition-colors`}
                            onClick={() => handleFilterChange(eventType.id)}
                        >
                            {eventType.icon} {eventType.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Weather Alert System</span>
                    <span className="ml-2 px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">Active</span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 mb-6">
                    {[
                        { icon: <CloudRain className="h-6 w-6" />, name: 'Severe Storms', count: '12' },
                        { icon: <CloudLightning className="h-6 w-6" />, name: 'Lightning', count: '23' },
                        { icon: <Wind className="h-6 w-6" />, name: 'High Winds', count: '8' },
                        { icon: <Thermometer className="h-6 w-6" />, name: 'Extreme Temps', count: '5' },
                        { icon: <Waves className="h-6 w-6" />, name: 'Flooding', count: '7' },
                        { icon: <Cloud className="h-6 w-6" />, name: 'Air Quality', count: '3' },
                    ].map((item, index) => (
                        <div key={index} className="bg-dark-200/50 rounded-xl overflow-hidden border border-dark-300/30 p-4 flex flex-col items-center">
                            <div className="rounded-full bg-blue-500/10 p-3 mb-2 text-blue-400">
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-sm text-dark-700">{item.name}</p>
                                <p className="text-xl font-bold">{item.count}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                        <div className="p-4 border-b border-dark-300/30 flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Active Hurricanes</h3>
                            <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">
                                Live Tracking
                            </span>
                        </div>
                        <div className="h-[400px]">
                            <HurricaneMap category="Category 5" status="active" />
                        </div>
                    </div>

                    <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                        <div className="p-4 border-b border-dark-300/30">
                            <h3 className="text-lg font-semibold">Weather Alerts</h3>
                        </div>
                        <div className="h-[400px] overflow-y-auto">
                            <WeatherAlertMonitor />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="lg:col-span-2 card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                        <div className="p-4 border-b border-dark-300/30">
                            <h3 className="text-lg font-semibold">Real-Time Weather Conditions</h3>
                        </div>
                        <div className="p-4 h-[300px] overflow-y-auto">
                            <RealTimeWeatherMonitor />
                        </div>
                    </div>

                    <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                        <div className="p-4 border-b border-dark-300/30 flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Locations</h3>
                            <Link href="/weather-alerts?action=addLocation" className="px-2 py-1 text-xs bg-dark-300/80 rounded-full text-dark-700 hover:bg-dark-300 transition-colors">
                                Add Location
                            </Link>
                        </div>
                        <div className="p-4 h-[300px] overflow-y-auto">
                            <div className="space-y-3">
                                {[
                                    { name: 'Chicago Headquarters', lat: 41.8781, lon: -87.6298 },
                                    { name: 'New York Regional Office', lat: 40.7128, lon: -74.0060 },
                                    { name: 'Miami Distribution Center', lat: 25.7617, lon: -80.1918 },
                                    { name: 'San Francisco Tech Hub', lat: 37.7749, lon: -122.4194 },
                                    { name: 'Dallas Operations', lat: 32.7767, lon: -96.7970 },
                                ].map((location, index) => (
                                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-dark-200/70 transition-colors">
                                        <div className="flex items-center">
                                            <MapPin className="h-4 w-4 text-blue-400 mr-2" />
                                            <span className="text-sm">{location.name}</span>
                                        </div>
                                        <Link
                                            href={`/weather-alerts?location=${encodeURIComponent(location.name)}&lat=${location.lat}&lon=${location.lon}`}
                                            className="text-xs px-2 py-1 bg-dark-300/70 hover:bg-dark-300 rounded transition-colors"
                                        >
                                            View
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Weather Radar Section */}
                <div className="grid grid-cols-1 gap-6 mb-6">
                    <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                        <div className="p-4 border-b border-dark-300/30 flex justify-between items-center">
                            <div className="flex items-center">
                                <Radar className="h-5 w-5 text-blue-400 mr-2" />
                                <h3 className="text-lg font-semibold">Weather Radar</h3>
                            </div>
                            <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">
                                Live Data
                            </span>
                        </div>
                        <div className="h-[400px]">
                            <WeatherRadar region="us" showControls={true} />
                        </div>
                    </div>
                </div>

                <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card">
                    <div className="p-4 border-b border-dark-300/30">
                        <h3 className="text-lg font-semibold">Weather Alert Details</h3>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {['Tornado Warning', 'Flash Flood', 'Severe Thunderstorm', 'Hurricane Watch', 'Extreme Heat', 'Winter Storm'].map((alertType, i) => (
                                <div
                                    key={i}
                                    className="bg-dark-200/50 p-4 rounded-lg border-l-4 hover:transform hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                                    style={{
                                        borderColor: alertType.includes('Tornado') ? '#ef4444' :
                                            alertType.includes('Flood') ? '#3b82f6' :
                                                alertType.includes('Thunder') ? '#f59e0b' :
                                                    alertType.includes('Hurricane') ? '#8b5cf6' :
                                                        alertType.includes('Heat') ? '#ec4899' : '#6366f1'
                                    }}
                                >
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-medium">{alertType}</h3>
                                        <span className="px-2 py-1 text-xs rounded-full" style={{
                                            backgroundColor: alertType.includes('Tornado') ? 'rgba(239, 68, 68, 0.2)' :
                                                alertType.includes('Flood') ? 'rgba(59, 130, 246, 0.2)' :
                                                    alertType.includes('Thunder') ? 'rgba(245, 158, 11, 0.2)' :
                                                        alertType.includes('Hurricane') ? 'rgba(139, 92, 246, 0.2)' :
                                                            alertType.includes('Heat') ? 'rgba(236, 72, 153, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                            color: alertType.includes('Tornado') ? '#ef4444' :
                                                alertType.includes('Flood') ? '#3b82f6' :
                                                    alertType.includes('Thunder') ? '#f59e0b' :
                                                        alertType.includes('Hurricane') ? '#8b5cf6' :
                                                            alertType.includes('Heat') ? '#ec4899' : '#6366f1'
                                        }}>
                                            Active
                                        </span>
                                    </div>
                                    <p className="text-sm text-dark-700 mt-2">Region: {i % 2 === 0 ? 'Eastern' : 'Western'} US</p>
                                    <p className="text-xs text-dark-700 mt-1">Updated: {lastUpdated || '—'}</p>
                                    <Link
                                        href={`/weather-alerts/${i + 1}?type=${encodeURIComponent(alertType)}&region=${i % 2 === 0 ? 'Eastern' : 'Western'}`}
                                        className="mt-3 text-sm px-3 py-1 bg-dark-300/70 hover:bg-dark-300 rounded-md transition-colors inline-flex items-center"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}