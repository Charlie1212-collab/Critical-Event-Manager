import React, { useState } from "react";
import Head from "next/head";
import MainLayout from "../components/MainLayout";
import NationalNewsPanel from "../components/NationalNewsPanel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Globe, FileText, TrendingUp } from "lucide-react";

// News categories for filtering
const CATEGORIES = [
    { id: 'all', name: 'All News', icon: <Globe className="w-4 h-4 mr-1" /> },
    { id: 'business', name: 'Business', icon: <TrendingUp className="w-4 h-4 mr-1" /> },
    { id: 'health', name: 'Health', icon: <FileText className="w-4 h-4 mr-1" /> }
];

export default function NationalNewsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    return (
        <MainLayout>
            <Head>
                <title>National News | Critical Event Manager</title>
            </Head>
            <div className="container mx-auto p-6">
                <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-1 flex items-center">
                            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">National News Monitoring</span>
                            <span className="ml-2 px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">Live</span>
                        </h2>
                        <p className="text-dark-700">Track breaking news and events across the country</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main News Feed */}
                    <div className="lg:col-span-2">
                        <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                            <div className="p-4 border-b border-dark-300/30">
                                <h3 className="text-lg font-semibold">Breaking News</h3>
                            </div>
                            <div className="p-6">
                                <NationalNewsPanel />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Current Top Stories */}
                        <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                            <div className="p-4 border-b border-dark-300/30">
                                <h3 className="text-lg font-semibold">Today's Headlines</h3>
                            </div>
                            <div className="p-4">
                                <div className="animate-pulse space-y-4">
                                    <div className="bg-dark-300/20 h-32 w-full rounded-lg"></div>
                                    <div>
                                        <div className="h-4 bg-dark-300/20 rounded w-3/4 mb-2"></div>
                                        <div className="h-3 bg-dark-300/10 rounded w-1/2"></div>
                                    </div>
                                    <div className="h-px bg-dark-300/10"></div>
                                    <div>
                                        <div className="h-4 bg-dark-300/20 rounded w-3/4 mb-2"></div>
                                        <div className="h-3 bg-dark-300/10 rounded w-1/2"></div>
                                    </div>
                                    <div className="h-px bg-dark-300/10"></div>
                                    <div>
                                        <div className="h-4 bg-dark-300/20 rounded w-3/4 mb-2"></div>
                                        <div className="h-3 bg-dark-300/10 rounded w-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Weather Impact */}
                        <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                            <div className="p-4 border-b border-dark-300/30">
                                <h3 className="text-lg font-semibold">Weather Impact</h3>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between pb-4 border-b border-dark-300/10">
                                    <div>
                                        <p className="text-dark-700 text-sm">Current Weather Alerts</p>
                                        <p className="text-xl font-semibold">17</p>
                                    </div>
                                    <div className="text-blue-400 text-3xl">⛈️</div>
                                </div>
                                <ul className="mt-3 space-y-2">
                                    <li className="bg-dark-300/10 p-2 rounded">
                                        <span className="block text-sm">Flash Flood Warning</span>
                                        <span className="text-xs text-dark-700">Central US - 3 States</span>
                                    </li>
                                    <li className="bg-dark-300/10 p-2 rounded">
                                        <span className="block text-sm">Tornado Watch</span>
                                        <span className="text-xs text-dark-700">Midwest - 4 Counties</span>
                                    </li>
                                    <li className="bg-dark-300/10 p-2 rounded">
                                        <span className="block text-sm">Heat Advisory</span>
                                        <span className="text-xs text-dark-700">Southern States</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}