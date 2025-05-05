import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import { AlertTriangle, MapPin, Calendar, Clock, Filter, Search, ArrowUpRight, Bell, BarChart2, Flame, Wind, Cloud, RefreshCw, AlertOctagon } from "lucide-react";
import MainLayout from "../components/MainLayout";

const IncidentPanel = dynamic(() => import("../components/IncidentPanel"), { ssr: false });
const LiveIncidentMap = dynamic(() => import("../components/LiveIncidentMap"), { ssr: false });

export default function Incidents() {
    // Client-side state for date values to prevent hydration mismatch
    const [currentYear, setCurrentYear] = useState('');
    const [activeFilter, setActiveFilter] = useState('24hours');
    const [activeEventTypes, setActiveEventTypes] = useState({
        incidents: true,
        wildfires: true,
        hurricanes: true,
        weather: true,
        crime: true
    });

    // New state for citizen incidents
    const [citizenIncidentCount, setCitizenIncidentCount] = useState(0);
    const [lastUpdated, setLastUpdated] = useState("");
    const [loading, setLoading] = useState(false);
    const [incidentsStats, setIncidentsStats] = useState({
        total: 328,
        wildfires: 35,
        hurricanes: 4,
        crime: 54
    });
    const [autoRefresh, setAutoRefresh] = useState(true);

    // Update date values only on the client side
    useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString());
    }, []);

    // Fetch citizen incidents data with automatic refresh
    const fetchCitizenIncidents = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/citizen-incidents');

            if (!response.ok) {
                throw new Error('Failed to fetch citizen incidents');
            }

            const data = await response.json();
            setCitizenIncidentCount(data.length);
            setLastUpdated(new Date().toLocaleTimeString());

            // Update incident stats based on citizen data
            setIncidentsStats(prev => ({
                ...prev,
                total: Math.max(prev.total, 328 + Math.floor(data.length / 3)),
                crime: Math.max(prev.crime, 54 + Math.floor(data.length / 5))
            }));

        } catch (error) {
            console.error("Error fetching citizen incidents:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    // Initial data fetch on component mount and set up auto-refresh
    useEffect(() => {
        fetchCitizenIncidents();

        let intervalId: NodeJS.Timeout | null = null;

        if (autoRefresh) {
            intervalId = setInterval(() => {
                fetchCitizenIncidents();
            }, 60000); // Refresh every 60 seconds
        }

        // Clean up on component unmount
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [fetchCitizenIncidents, autoRefresh]);

    // Handle filter change
    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
    };

    // Handle event type toggle
    const handleEventTypeToggle = (eventType: string) => {
        setActiveEventTypes(prev => ({
            ...prev,
            [eventType]: !prev[eventType as keyof typeof prev]
        }));
    };

    // Toggle auto-refresh
    const toggleAutoRefresh = () => {
        setAutoRefresh(prev => !prev);
    };

    // Manual refresh
    const handleManualRefresh = () => {
        fetchCitizenIncidents();
    };

    return (
        <MainLayout>
            <Head>
                <title>Critical Event Management - Integrated Monitoring</title>
            </Head>

            {/* Filter options as horizontal tabs */}
            <div className="bg-dark-300/30 py-2 px-4 overflow-x-auto">
                <div className="container mx-auto flex items-center justify-between overflow-x-auto">
                    <div className="flex items-center space-x-5">
                        <button
                            className={`px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5 ${activeFilter === '24hours'
                                ? "bg-blue-500 text-white"
                                : "bg-dark-300/50 text-dark-700 hover:bg-dark-300/80 hover:text-white"
                                } transition-colors`}
                            onClick={() => handleFilterChange('24hours')}
                        >
                            <Clock className="h-4 w-4" /> Last 24 Hours
                        </button>
                        <button
                            className={`px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5 ${activeFilter === 'daterange'
                                ? "bg-blue-500 text-white"
                                : "bg-dark-300/50 text-dark-700 hover:bg-dark-300/80 hover:text-white"
                                } transition-colors`}
                            onClick={() => handleFilterChange('daterange')}
                        >
                            <Calendar className="h-4 w-4" /> Date Range
                        </button>
                        <button
                            className={`px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5 ${activeFilter === 'location'
                                ? "bg-blue-500 text-white"
                                : "bg-dark-300/50 text-dark-700 hover:bg-dark-300/80 hover:text-white"
                                } transition-colors`}
                            onClick={() => handleFilterChange('location')}
                        >
                            <MapPin className="h-4 w-4" /> Location
                        </button>
                    </div>

                    {/* Auto-refresh controls */}
                    <div className="flex items-center gap-2">
                        {loading ? (
                            <span className="text-xs text-dark-700">Updating...</span>
                        ) : lastUpdated && (
                            <span className="text-xs text-dark-700">Last updated: {lastUpdated}</span>
                        )}

                        <button
                            onClick={handleManualRefresh}
                            disabled={loading}
                            className="p-1.5 rounded hover:bg-dark-300/50 disabled:opacity-50"
                            title="Refresh incidents"
                        >
                            <RefreshCw size={16} className={`text-blue-400 ${loading ? 'animate-spin' : ''}`} />
                        </button>

                        <button
                            onClick={toggleAutoRefresh}
                            className={`text-xs px-2 py-1 rounded ${autoRefresh ? 'bg-blue-500 text-white' : 'bg-dark-300/50 text-dark-700'}`}
                            title={autoRefresh ? "Disable auto-refresh" : "Enable auto-refresh"}
                        >
                            {autoRefresh ? 'Auto' : 'Manual'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-6">
                <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-1 flex items-center">
                            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Integrated Event Monitoring</span>
                            <span className="ml-2 px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">Live</span>
                        </h2>
                        <p className="text-dark-700">Monitoring wildfires, hurricanes, and other critical events</p>
                    </div>

                    {/* Event Type Filters */}
                    <div className="flex flex-wrap gap-2 mt-3 md:mt-0">
                        <button
                            className={`px-3 py-1.5 rounded-md text-xs flex items-center gap-1.5 
                                ${activeEventTypes.wildfires
                                    ? "bg-red-500/80 text-white"
                                    : "bg-dark-300/50 text-dark-700"} 
                                transition-colors`}
                            onClick={() => handleEventTypeToggle('wildfires')}
                        >
                            <Flame className="h-3 w-3" /> Wildfires
                        </button>
                        <button
                            className={`px-3 py-1.5 rounded-md text-xs flex items-center gap-1.5 
                                ${activeEventTypes.hurricanes
                                    ? "bg-blue-500/80 text-white"
                                    : "bg-dark-300/50 text-dark-700"} 
                                transition-colors`}
                            onClick={() => handleEventTypeToggle('hurricanes')}
                        >
                            <Wind className="h-3 w-3" /> Hurricanes
                        </button>
                        <button
                            className={`px-3 py-1.5 rounded-md text-xs flex items-center gap-1.5 
                                ${activeEventTypes.weather
                                    ? "bg-teal-500/80 text-white"
                                    : "bg-dark-300/50 text-dark-700"} 
                                transition-colors`}
                            onClick={() => handleEventTypeToggle('weather')}
                        >
                            <Cloud className="h-3 w-3" /> Weather
                        </button>
                        <button
                            className={`px-3 py-1.5 rounded-md text-xs flex items-center gap-1.5 
                                ${activeEventTypes.crime
                                    ? "bg-orange-500/80 text-white"
                                    : "bg-dark-300/50 text-dark-700"} 
                                transition-colors`}
                            onClick={() => handleEventTypeToggle('crime')}
                        >
                            <AlertTriangle className="h-3 w-3" /> Crime
                        </button>
                    </div>
                </div>

                {/* Stats overview cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
                    <div className="card-hover border border-dark-300/20 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-dark-700 mb-1 uppercase font-semibold tracking-wider text-sm">
                                    Total Events
                                </p>
                                <h3 className="font-bold text-2xl">{incidentsStats.total}</h3>
                                <p className="flex items-center text-green-500 mt-1 text-sm">
                                    <span className="mr-1">↑</span> 15% from last month
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shadow-glow shadow-blue-500/10">
                                <AlertTriangle className="h-5 w-5 text-blue-500" />
                            </div>
                        </div>
                    </div>

                    <div className="card-hover border border-dark-300/20 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-dark-700 mb-1 uppercase font-semibold tracking-wider text-sm">
                                    Active Wildfires
                                </p>
                                <h3 className="font-bold text-2xl text-red-500">{incidentsStats.wildfires}</h3>
                                <p className="flex items-center text-red-500 mt-1 text-sm">
                                    <span className="mr-1">↑</span> 22% from last month
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shadow-glow shadow-red-500/10">
                                <Flame className="h-5 w-5 text-red-500" />
                            </div>
                        </div>
                    </div>

                    <div className="card-hover border border-dark-300/20 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-dark-700 mb-1 uppercase font-semibold tracking-wider text-sm">
                                    Hurricanes
                                </p>
                                <h3 className="font-bold text-2xl text-blue-500">{incidentsStats.hurricanes}</h3>
                                <p className="flex items-center text-blue-500 mt-1 text-sm">
                                    <span className="mr-1">↑</span> 2 new this week
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shadow-glow shadow-blue-500/10">
                                <Wind className="h-5 w-5 text-blue-500" />
                            </div>
                        </div>
                    </div>

                    <div className="card-hover border border-dark-300/20 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-dark-700 mb-1 uppercase font-semibold tracking-wider text-sm">
                                    Crime Incidents
                                </p>
                                <h3 className="font-bold text-2xl text-orange-500">{incidentsStats.crime}</h3>
                                <p className="flex items-center text-orange-500 mt-1 text-sm">
                                    <span className="mr-1">↑</span> 8% from last month
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shadow-glow shadow-orange-500/10">
                                <AlertTriangle className="h-5 w-5 text-orange-500" />
                            </div>
                        </div>
                    </div>

                    {/* New: Citizen Alerts Card */}
                    <div className="card-hover border border-dark-300/20 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-dark-700 mb-1 uppercase font-semibold tracking-wider text-sm">
                                    Citizen Alerts
                                </p>
                                <h3 className="font-bold text-2xl text-orange-400">{citizenIncidentCount}</h3>
                                <p className="flex items-center text-green-500 mt-1 text-sm">
                                    Auto-updating
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-orange-400/20 flex items-center justify-center shadow-glow shadow-orange-400/10">
                                <AlertOctagon className="h-5 w-5 text-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden card-hover lg:col-span-2">
                        <div className="p-4 border-b border-dark-300/30 flex justify-between items-center">
                            <h3 className="text-lg font-semibold flex items-center">
                                Integrated Event Map
                                <div className="flex ml-2 gap-1">
                                    {activeEventTypes.wildfires && <div className="w-2 h-2 rounded-full bg-red-500"></div>}
                                    {activeEventTypes.hurricanes && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
                                    {activeEventTypes.weather && <div className="w-2 h-2 rounded-full bg-teal-500"></div>}
                                    {activeEventTypes.crime && <div className="w-2 h-2 rounded-full bg-orange-500"></div>}
                                </div>
                            </h3>
                            <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full flex items-center">
                                <span className="mr-1.5 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                                Live Data
                            </span>
                        </div>
                        <div className="h-[550px]">
                            <LiveIncidentMap
                                activeEventTypes={activeEventTypes}
                            />
                        </div>
                    </div>

                    <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden card-hover">
                        <div className="p-4 border-b border-dark-300/30">
                            <h3 className="text-lg font-semibold">Incident Reports</h3>
                        </div>
                        <div className="h-[550px] overflow-y-auto">
                            <IncidentPanel />
                        </div>
                    </div>
                </div>

                <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card card-hover">
                    <div className="p-4 border-b border-dark-300/30 flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Recent Critical Events</h3>
                        <button className="text-sm text-blue-400 hover:underline flex items-center">
                            <Link href="/incidents?view=all" className="flex items-center">
                                View All <ArrowUpRight className="ml-1 h-3 w-3" />
                            </Link>
                        </button>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { title: 'NMGNF Iron Fire', location: 'New Mexico', time: '2 hours ago', level: 'Critical', type: 'wildfire' },
                                { title: 'Hurricane Everett', location: 'Atlantic Ocean', time: '4 hours ago', level: 'High', type: 'hurricane' },
                                { title: 'Store Robbery', location: 'Chicago, IL', time: '6 hours ago', level: 'Medium', type: 'crime' },
                                { title: 'MTBDF Sawlog Fire', location: 'Montana', time: '8 hours ago', level: 'High', type: 'wildfire' },
                                { title: 'Hurricane Diana', location: 'Caribbean Sea', time: '12 hours ago', level: 'High', type: 'hurricane' },
                                { title: 'Customer Incident', location: 'Los Angeles, CA', time: '1 day ago', level: 'Medium', type: 'crime' },
                            ].map((incident, i) => {
                                const getIncidentColor = () => {
                                    switch (incident.type) {
                                        case 'wildfire': return 'rgb(239, 68, 68)'; // red
                                        case 'hurricane': return 'rgb(59, 130, 246)'; // blue
                                        case 'crime': return 'rgb(249, 115, 22)'; // orange
                                        default: return 'rgb(34, 197, 94)'; // green
                                    }
                                };

                                const getIncidentIcon = () => {
                                    switch (incident.type) {
                                        case 'wildfire': return <Flame className="ml-1 h-4 w-4" />;
                                        case 'hurricane': return <Wind className="ml-1 h-4 w-4" />;
                                        case 'crime': return <AlertTriangle className="ml-1 h-4 w-4" />;
                                        default: return <Bell className="ml-1 h-4 w-4" />;
                                    }
                                };

                                return (
                                    <div
                                        key={i}
                                        className="bg-dark-200/50 p-4 rounded-lg border-l-4 hover:transform hover:-translate-y-1 transition-all duration-200 cursor-pointer card-hover shadow-inner-highlight"
                                        style={{ borderColor: getIncidentColor() }}
                                    >
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-medium flex items-center">
                                                {incident.title}
                                                {getIncidentIcon()}
                                            </h3>
                                            <span className="px-2 py-1 text-xs rounded-full" style={{
                                                backgroundColor: `${getIncidentColor()}30`,
                                                color: getIncidentColor()
                                            }}>
                                                {incident.level}
                                            </span>
                                        </div>
                                        <p className="text-sm text-dark-700 mt-2">{incident.location}</p>
                                        <p className="text-xs text-dark-700 mt-1">{incident.time}</p>
                                        <Link href={`/incidents/${i + 1}?title=${encodeURIComponent(incident.title)}&level=${incident.level}&type=${incident.type}`} className="mt-3 text-sm px-3 py-1 bg-dark-300/70 hover:bg-dark-300 rounded-md transition-colors btn-hover-effect shadow-inner-highlight flex items-center">
                                            View Details <ArrowUpRight className="ml-1 h-3 w-3" />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}