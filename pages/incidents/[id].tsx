import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, AlertTriangle, User, Shield, Flame, Wind, Cloud, ArrowUpRight } from "lucide-react";
import MainLayout from "../../components/MainLayout";
import dynamic from "next/dynamic";

// Dynamically import components with SSR disabled
const LiveIncidentMap = dynamic(() => import("../../components/LiveIncidentMap"), { ssr: false });

// Mock incident details (in a real app, you would fetch this from an API)
const getIncidentDetails = (id: string, type: string) => {
    // Sample data - this would normally come from your API
    const details = {
        wildfire: {
            affectedAreas: "5,200 acres",
            containment: "35%",
            responders: "245 personnel",
            evacuation: "Mandatory for Zones 3, 4, 5",
            started: "May 2, 2025",
            cause: "Under investigation",
            updates: [
                { time: "May 4, 2025 - 10:30 AM", text: "Fire has grown by 300 acres overnight. Additional resources deployed." },
                { time: "May 3, 2025 - 8:15 PM", text: "Containment increased to 35%. Favorable weather conditions expected." },
                { time: "May 3, 2025 - 11:20 AM", text: "Evacuation orders extended to Zone 5." },
            ]
        },
        hurricane: {
            category: "Category 3",
            windSpeed: "120 mph",
            pressure: "945 mb",
            movement: "NW at 12 mph",
            affectedAreas: "Coastal regions from Tampa to Tallahassee",
            evacuationStatus: "Mandatory for coastal zones",
            updates: [
                { time: "May 4, 2025 - 9:45 AM", text: "Hurricane continues to strengthen. Expected to make landfall by evening." },
                { time: "May 3, 2025 - 7:30 PM", text: "Storm surge warnings issued for entire coastline." },
                { time: "May 3, 2025 - 10:00 AM", text: "Hurricane upgraded to Category 3." },
            ]
        },
        crime: {
            reportedBy: "Store Manager",
            responders: "CPD Units 345, 367",
            status: "Under Investigation",
            propertyDamage: "Minor",
            suspectStatus: "At Large",
            securityFootage: "Available",
            updates: [
                { time: "May 4, 2025 - 11:15 AM", text: "Detective assigned to case. Review of security footage underway." },
                { time: "May 3, 2025 - 9:20 PM", text: "Initial forensic examination completed." },
                { time: "May 3, 2025 - 8:05 PM", text: "Police report filed. Case #CHI-23451." },
            ]
        }
    };

    return details[type as keyof typeof details] || details.crime;
};

export default function IncidentDetailsPage() {
    const router = useRouter();
    const { id, title, level, type } = router.query;
    const [incidentDetails, setIncidentDetails] = useState<any>(null);

    useEffect(() => {
        // Only fetch details when router is ready and type is available
        if (router.isReady && type) {
            setIncidentDetails(getIncidentDetails(id as string, type as string));
        }
    }, [router.isReady, id, type]);

    const getIncidentColor = () => {
        switch (type) {
            case 'wildfire': return 'rgb(239, 68, 68)'; // red
            case 'hurricane': return 'rgb(59, 130, 246)'; // blue
            case 'crime': return 'rgb(249, 115, 22)'; // orange
            default: return 'rgb(34, 197, 94)'; // green
        }
    };

    const getIncidentIcon = () => {
        switch (type) {
            case 'wildfire': return <Flame className="ml-1 h-5 w-5" />;
            case 'hurricane': return <Wind className="ml-1 h-5 w-5" />;
            case 'crime': return <AlertTriangle className="ml-1 h-5 w-5" />;
            default: return <AlertTriangle className="ml-1 h-5 w-5" />;
        }
    };

    // Show loading state while router is not ready or incident details are loading
    if (!router.isReady || !incidentDetails) {
        return (
            <MainLayout>
                <div className="container mx-auto p-6">
                    <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card p-8 flex justify-center items-center">
                        <div className="animate-pulse flex flex-col items-center">
                            <div className="h-8 w-64 bg-dark-300/50 rounded-lg mb-4"></div>
                            <div className="h-4 w-48 bg-dark-300/30 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <Head>
                <title>{title} | Critical Event Manager</title>
            </Head>

            <div className="container mx-auto p-6">
                {/* Back button */}
                <Link href="/incidents" className="mb-6 inline-flex items-center text-dark-700 hover:text-white transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Incidents
                </Link>

                {/* Header */}
                <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card mb-6">
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div className="flex items-start">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4`} style={{ backgroundColor: `${getIncidentColor()}25` }}>
                                    {getIncidentIcon()}
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold">{title}</h1>
                                    <div className="flex items-center mt-1 text-dark-700">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        <span className="text-sm">Incident ID: {id}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:mt-0 flex flex-col items-end">
                                <span className="px-3 py-1 text-sm rounded-full mb-2" style={{
                                    backgroundColor: `${getIncidentColor()}30`,
                                    color: getIncidentColor()
                                }}>
                                    {level} Priority
                                </span>
                                <div className="flex items-center text-dark-700">
                                    <Clock className="h-4 w-4 mr-1" />
                                    <span className="text-sm">Last updated: {new Date().toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main content - two column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left column - wider */}
                    <div className="lg:col-span-2">
                        {/* Map view */}
                        <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden mb-6">
                            <div className="p-4 border-b border-dark-300/30">
                                <h3 className="text-lg font-semibold">Location</h3>
                            </div>
                            <div className="h-[400px]">
                                <LiveIncidentMap
                                    activeEventTypes={{
                                        incidents: true,
                                        wildfires: type === 'wildfire',
                                        hurricanes: type === 'hurricane',
                                        weather: false,
                                        crime: type === 'crime'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Details specific to incident type */}
                        <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                            <div className="p-4 border-b border-dark-300/30">
                                <h3 className="text-lg font-semibold">Incident Details</h3>
                            </div>
                            <div className="p-6">
                                {type === 'wildfire' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-md font-semibold mb-4">Fire Information</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Affected Area:</span>
                                                    <span>{incidentDetails.affectedAreas}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Containment:</span>
                                                    <span>{incidentDetails.containment}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Fire Started:</span>
                                                    <span>{incidentDetails.started}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Cause:</span>
                                                    <span>{incidentDetails.cause}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-md font-semibold mb-4">Response</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Responders:</span>
                                                    <span>{incidentDetails.responders}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Evacuation:</span>
                                                    <span>{incidentDetails.evacuation}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {type === 'hurricane' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-md font-semibold mb-4">Hurricane Information</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Category:</span>
                                                    <span>{incidentDetails.category}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Wind Speed:</span>
                                                    <span>{incidentDetails.windSpeed}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Pressure:</span>
                                                    <span>{incidentDetails.pressure}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Movement:</span>
                                                    <span>{incidentDetails.movement}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-md font-semibold mb-4">Impact</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Affected Areas:</span>
                                                    <span>{incidentDetails.affectedAreas}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Evacuation Status:</span>
                                                    <span>{incidentDetails.evacuationStatus}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {type === 'crime' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-md font-semibold mb-4">Incident Information</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Reported By:</span>
                                                    <span>{incidentDetails.reportedBy}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Status:</span>
                                                    <span>{incidentDetails.status}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Property Damage:</span>
                                                    <span>{incidentDetails.propertyDamage}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-md font-semibold mb-4">Response</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Responders:</span>
                                                    <span>{incidentDetails.responders}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Suspect Status:</span>
                                                    <span>{incidentDetails.suspectStatus}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-dark-700">Security Footage:</span>
                                                    <span>{incidentDetails.securityFootage}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="lg:col-span-1">
                        {/* Status Card */}
                        <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden mb-6">
                            <div className="p-4 border-b border-dark-300/30">
                                <h3 className="text-lg font-semibold">Status</h3>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-dark-700">Response Team</span>
                                    <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Active</span>
                                </div>

                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-dark-700">Alert Status</span>
                                    <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">
                                        {level === 'Critical' ? 'High Alert' : level === 'High' ? 'Alert' : 'Monitor'}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-dark-700">Updates</span>
                                    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">
                                        Live
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Updates Timeline */}
                        <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                            <div className="p-4 border-b border-dark-300/30">
                                <h3 className="text-lg font-semibold">Recent Updates</h3>
                            </div>
                            <div className="p-4">
                                {incidentDetails.updates && incidentDetails.updates.map((update: any, index: number) => (
                                    <div key={index} className="mb-4 relative pl-6">
                                        <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-blue-500"></div>
                                        <div className={`border-l-2 border-blue-500/30 pl-4 pb-4 ${index === incidentDetails.updates.length - 1 ? '' : 'ml-1.5'}`}>
                                            <p className="text-xs text-dark-700 mb-1">{update.time}</p>
                                            <p className="text-sm">{update.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Related Incidents */}
                        <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden mt-6">
                            <div className="p-4 border-b border-dark-300/30">
                                <h3 className="text-lg font-semibold">Related Incidents</h3>
                            </div>
                            <div className="p-4">
                                <div className="mb-4 pb-4 border-b border-dark-300/30">
                                    <div className="flex justify-between">
                                        <h4 className="font-medium">Similar {type} incident</h4>
                                        <span className="px-2 py-1 text-xs rounded-full" style={{
                                            backgroundColor: `${getIncidentColor()}30`,
                                            color: getIncidentColor()
                                        }}>
                                            {level}
                                        </span>
                                    </div>
                                    <p className="text-sm text-dark-700 mt-2">Located 15 miles from current incident</p>
                                    <Link
                                        href="#"
                                        className="mt-2 text-sm text-blue-400 hover:text-blue-300 flex items-center"
                                    >
                                        View details <ArrowUpRight className="ml-1 h-3 w-3" />
                                    </Link>
                                </div>

                                <div className="mb-0">
                                    <div className="flex justify-between">
                                        <h4 className="font-medium">Historical {type} data</h4>
                                    </div>
                                    <p className="text-sm text-dark-700 mt-2">3 similar incidents in past 6 months</p>
                                    <Link
                                        href="#"
                                        className="mt-2 text-sm text-blue-400 hover:text-blue-300 flex items-center"
                                    >
                                        View analysis <ArrowUpRight className="ml-1 h-3 w-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}