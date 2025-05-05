import React from 'react';
import Card from './Common/Card';
import { AlertTriangle, CloudSnow, ShieldCheck, Search } from 'lucide-react';

function DashboardContent() {
    return (
        <div className="container mx-auto p-4">
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text-white mb-2">Overview</h2>
                <p>Current active events and critical incidents</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                        <div className="flex flex-col">
                            <div className="flex items-center space-x-2">
                                <AlertTriangle color="red" size={32} />
                                <h3 className="text-lg font-semibold text-dark-text-white">Critical Incidents</h3>
                            </div>
                            <div className="text-3xl font-bold text-dark-text-white">12</div>
                            <div className="text-sm">+9 since yesterday</div>
                        </div>
                    </Card>

                    <Card>
                        <div className="flex flex-col">
                            <div className="flex items-center space-x-2">
                                <CloudSnow color="yellow" size={32} />
                                <h3 className="text-lg font-semibold text-dark-text-white">Weather Alerts</h3>
                            </div>
                            <div className="text-3xl font-bold text-dark-text-white">3</div>
                            <div className="text-sm">+1 since yesterday</div>
                        </div>
                    </Card>

                    <Card>
                        <div className="flex flex-col">
                            <div className="flex items-center space-x-2">
                                <ShieldCheck color="blue" size={32} />
                                <h3 className="text-lg font-semibold text-dark-text-white">Store Incidents</h3>
                            </div>
                            <div className="text-3xl font-bold text-dark-text-white">7</div>
                            <div className="text-sm">+1 since yesterday</div>
                        </div>
                    </Card>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-dark-text-white mb-2">Real-time Map</h2>
                <Card>
                    {/* Placeholder for the map */}
                    <div className="h-64 bg-gray-700"></div>
                </Card>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-dark-text-white mb-2">Weather Warnings</h2>
                <Card>
                    <ul>
                        <li className="flex items-center justify-between py-2 border-b border-dark-border">
                            <div>
                                <h4 className="text-dark-text-white font-semibold">Hurricane Warning</h4>
                                <p className="text-sm">Southern Florida</p>
                            </div>
                            <div>
                                <p className="text-sm">Florida</p>
                                <p className="text-sm">High Alert</p>
                                <p className="text-sm">30 m ago</p>
                            </div>
                        </li>
                        <li className="flex items-center justify-between py-2 border-b border-dark-border">
                            <div>
                                <h4 className="text-dark-text-white font-semibold">Severe Thunderstorm</h4>
                                <p className="text-sm">Warning Eastern Area</p>
                            </div>
                            <div>
                                <p className="text-sm">Alabama</p>
                                <p className="text-sm">Severe</p>
                                <p className="text-sm">1 h ago</p>
                            </div>
                        </li>
                        <li className="flex items-center justify-between py-2">
                            <div>
                                <h4 className="text-dark-text-white font-semibold">Flood Watch</h4>
                                <p className="text-sm">Be Prepared</p>
                            </div>
                            <div>
                                <p className="text-sm">Texas</p>
                                <p className="text-sm">Be Prepared</p>
                                <p className="text-sm">2 h ago</p>
                            </div>
                        </li>
                    </ul>
                </Card>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-dark-text-white mb-2">Active Hurricanes</h2>
                <Card>
                    {/* Placeholder for Active Hurricanes content */}
                    <p>Active Hurricanes content here</p>
                </Card>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-dark-text-white mb-2">Recent incidents</h2>
                <Card>
                    <ul>
                        <li className="flex items-center justify-between py-2 border-b border-dark-border">
                            <div>
                                <h4 className="text-dark-text-white font-semibold">Robbery</h4>
                                <p className="text-sm">New York, NY</p>
                            </div>
                            <div>
                                <p className="text-sm">15 h ago</p>
                            </div>
                        </li>
                        <li className="flex items-center justify-between py-2 border-b border-dark-border">
                            <div>
                                <h4 className="text-dark-text-white font-semibold">Fire</h4>
                                <p className="text-sm">Los Angeles, CA</p>
                            </div>
                            <div>
                                <p className="text-sm">2 h ago</p>
                            </div>
                        </li>
                        <li className="flex items-center justify-between py-2">
                            <div>
                                <h4 className="text-dark-text-white font-semibold">Flood</h4>
                                <p className="text-sm">Miami, FL</p>
                            </div>
                            <div>
                                <p className="text-sm">3 h ago</p>
                            </div>
                        </li>
                    </ul>
                </Card>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-dark-text-white mb-2">Status</h2>
                <Card>
                    <ul>
                        <li className="flex items-center justify-between py-2 border-b border-dark-border">
                            <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                <span>API Service</span>
                            </div>
                        </li>
                        <li className="flex items-center justify-between py-2 border-b border-dark-border">
                            <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                <span>Weather Data</span>
                            </div>
                        </li>
                        <li className="flex items-center justify-between py-2 border-b border-dark-border">
                            <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                <span>Incident Tracking</span>
                            </div>
                        </li>
                        <li className="flex items-center justify-between py-2">
                            <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                                <span>Citizen Reports</span>
                            </div>
                        </li>
                    </ul>
                    <p className="text-sm mt-2">Last system check: 10:43 AM</p>
                </Card>
            </section>
        </div>
    );
}

export default DashboardContent;