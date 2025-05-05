import React from "react";
import { AlertTriangle, CloudSnow, ShieldCheck, Search, Newspaper, Flame, RefreshCw, AlertOctagon } from "lucide-react";
import Card from "./ui/card";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

// Import the GdeltIncidentsMonitor dynamically to avoid SSR issues
const GdeltIncidentsMonitor = dynamic(() => import("./GdeltIncidentsMonitor"), {
    ssr: false,
    loading: () => <div className="h-full flex items-center justify-center">Loading GDELT data...</div>
});

// Import the WildfireIncidentsMonitor dynamically to avoid SSR issues
const WildfireIncidentsMonitor = dynamic(() => import("./WildfireIncidentsMonitor"), {
    ssr: false,
    loading: () => <div className="h-full flex items-center justify-center">Loading wildfire data...</div>
});

interface IntegratedDashboardContentProps {
    incidents?: number;
    weatherAlerts?: number;
    storeIncidents?: number;
    citizenIncidentCount?: number;
    lastUpdated?: string;
    isLoading?: boolean;
}

function IntegratedDashboardContent({
    incidents = 12,
    weatherAlerts = 3,
    storeIncidents = 7,
    citizenIncidentCount = 0,
    lastUpdated = "",
    isLoading = false
}: IntegratedDashboardContentProps) {
    return (
        <div className="container mx-auto p-4">
            <section className="mb-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-semibold text-dark-text-white mb-2">Overview</h2>
                        <p className="text-dark-text-gray">Current active events and critical incidents</p>
                    </div>

                    {lastUpdated && (
                        <div className="flex items-center space-x-2">
                            {isLoading ? (
                                <span className="text-xs text-dark-text-gray">Updating data...</span>
                            ) : (
                                <span className="text-xs text-dark-text-gray">Last updated: {lastUpdated}</span>
                            )}
                            <RefreshCw size={14} className={`text-blue-400 ${isLoading ? 'animate-spin' : ''}`} />
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    <Card>
                        <div className="flex flex-col">
                            <div className="flex items-center space-x-2">
                                <AlertTriangle color="red" size={32} />
                                <h3 className="text-lg font-semibold text-dark-text-white">Critical Incidents</h3>
                            </div>
                            <div className="text-3xl font-bold text-dark-text-white">{incidents}</div>
                            <div className="text-sm text-dark-text-gray">+9 since yesterday</div>
                        </div>
                    </Card>

                    <Card>
                        <div className="flex flex-col">
                            <div className="flex items-center space-x-2">
                                <CloudSnow color="yellow" size={32} />
                                <h3 className="text-lg font-semibold text-dark-text-white">Weather Alerts</h3>
                            </div>
                            <div className="text-3xl font-bold text-dark-text-white">{weatherAlerts}</div>
                            <div className="text-sm text-dark-text-gray">+1 since yesterday</div>
                        </div>
                    </Card>

                    <Card>
                        <div className="flex flex-col">
                            <div className="flex items-center space-x-2">
                                <ShieldCheck color="blue" size={32} />
                                <h3 className="text-lg font-semibold text-dark-text-white">Store Incidents</h3>
                            </div>
                            <div className="text-3xl font-bold text-dark-text-white">{storeIncidents}</div>
                            <div className="text-sm text-dark-text-gray">+1 since yesterday</div>
                        </div>
                    </Card>

                    <Card>
                        <div className="flex flex-col">
                            <div className="flex items-center space-x-2">
                                <AlertOctagon color="orange" size={32} />
                                <h3 className="text-lg font-semibold text-dark-text-white">Citizen Alerts</h3>
                            </div>
                            <div className="text-3xl font-bold text-dark-text-white">
                                {citizenIncidentCount}
                                {isLoading && <span className="ml-2 text-xs text-dark-text-gray animate-pulse">updating...</span>}
                            </div>
                            <div className="text-sm text-dark-text-gray">Auto-updating every minute</div>
                        </div>
                    </Card>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-dark-text-white mb-2">Real-time Map</h2>
                        <Card>
                            <div className="h-64">
                                <MapContainer center={[39.8283, -98.5795]} zoom={4} className="h-full w-full">
                                    <TileLayer
                                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                    />
                                </MapContainer>
                            </div>
                        </Card>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-dark-text-white mb-2">Weather Warnings</h2>
                        <Card>
                            <ul>
                                <li className="flex items-center justify-between py-2 border-b border-dark-border">
                                    <div>
                                        <h4 className="text-dark-text-white font-semibold">Hurricane Warning</h4>
                                        <p className="text-sm text-dark-text-gray">Major Category 3 Storm</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-dark-text-gray">Florida</p>
                                        <p className="text-sm text-dark-text-gray">Atlantic Coast</p>
                                        <p className="text-sm text-dark-text-gray">30 min ago</p>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-2 border-b border-dark-border">
                                    <div>
                                        <h4 className="text-dark-text-white font-semibold">Severe Thunderstorm</h4>
                                        <p className="text-sm text-dark-text-gray">Warning Issued</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-dark-text-gray">Alabama</p>
                                        <p className="text-sm text-dark-text-gray">State: Northern</p>
                                        <p className="text-sm text-dark-text-gray">1 h ago</p>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-2">
                                    <div>
                                        <h4 className="text-dark-text-white font-semibold">Flood Watch</h4>
                                        <p className="text-sm text-dark-text-gray">Be Prepared</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-dark-text-gray">Texas</p>
                                        <p className="text-sm text-dark-text-gray">Gulf Coast</p>
                                        <p className="text-sm text-dark-text-gray">2 h ago</p>
                                    </div>
                                </li>
                            </ul>
                        </Card>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-dark-text-white mb-2 flex items-center">
                            <Flame className="mr-2" size={20} color="orange" />
                            Active Wildfires
                        </h2>
                        <Card className="h-[300px]">
                            <div className="h-full">
                                <WildfireIncidentsMonitor />
                            </div>
                        </Card>
                    </section>
                </div>

                <div>
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-dark-text-white mb-2 flex items-center">
                            <Newspaper className="mr-2" size={20} />
                            Walgreens News Feed
                        </h2>
                        <Card className="h-[550px]">
                            <div className="h-full">
                                <GdeltIncidentsMonitor />
                            </div>
                        </Card>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-dark-text-white mb-2">Recent Incidents</h2>
                        <Card>
                            <ul>
                                <li className="flex items-center justify-between py-2 border-b border-dark-border">
                                    <div>
                                        <h4 className="text-dark-text-white font-semibold">Robbery</h4>
                                        <p className="text-sm text-dark-text-gray">New York, NY</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-dark-text-gray">15 h ago</p>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-2 border-b border-dark-border">
                                    <div>
                                        <h4 className="text-dark-text-white font-semibold">Fire</h4>
                                        <p className="text-sm text-dark-text-gray">Los Angeles, CA</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-dark-text-gray">2 h ago</p>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-2">
                                    <div>
                                        <h4 className="text-dark-text-white font-semibold">Flood</h4>
                                        <p className="text-sm text-dark-text-gray">Miami, FL</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-dark-text-gray">3 h ago</p>
                                    </div>
                                </li>
                            </ul>
                        </Card>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-dark-text-white mb-2">System Status</h2>
                        <Card>
                            <ul>
                                <li className="flex items-center justify-between py-2 border-b border-dark-border">
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-dark-text-white">API Service</span>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-2 border-b border-dark-border">
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-dark-text-white">Weather Data</span>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-2 border-b border-dark-border">
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-dark-text-white">Incident Tracking</span>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-2">
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-dark-text-white">GDELT News Feed</span>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-2 border-t border-dark-border">
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-dark-text-white">Wildfire Data (InciWeb)</span>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-2 border-t border-dark-border">
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        <span className="text-dark-text-white">Citizen Reports</span>
                                        {isLoading && <span className="ml-2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>}
                                    </div>
                                    <div className="text-xs text-gray-400">Auto-updating</div>
                                </li>
                            </ul>
                            <p className="text-sm mt-2 text-dark-text-gray">Last system check: {lastUpdated || new Date().toLocaleTimeString()}</p>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default IntegratedDashboardContent;