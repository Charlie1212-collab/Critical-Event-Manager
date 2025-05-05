import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import MainLayout from "../../components/MainLayout";
import {
    CloudLightning,
    CloudRain,
    Wind,
    Thermometer,
    Waves,
    Cloud,
    MapPin,
    ArrowLeft,
    Clock,
    AlertTriangle,
    ExternalLink,
    Download
} from "lucide-react";

// Mock weather alert data - would typically come from an API
const alertDetailsMock = {
    "1": {
        event: "Tornado Warning",
        description: "The National Weather Service has issued a tornado warning for this area. Take shelter immediately in a basement or an interior room on the lowest floor of a sturdy building. Avoid windows. If in a mobile home, a vehicle, or outdoors, move to the closest substantial shelter and protect yourself from flying debris.",
        start: new Date().getTime(),
        end: new Date().getTime() + 3600000, // 1 hour from now
        sender: "NWS Chicago",
        severity: "Extreme",
        impactedAreas: ["Chicago Metro", "Northern Illinois", "Northwestern Indiana"],
        recommendations: [
            "Move to an interior room on the lowest floor of a sturdy building",
            "Avoid windows",
            "If in a vehicle, trailer, or mobile home, get out and go to the closest substantial building",
            "If no shelter is available, lie flat in a ditch or culvert and cover your head"
        ]
    },
    "2": {
        event: "Flash Flood",
        description: "Flash flooding is occurring or imminent. Heavy rainfall will cause flooding of small creeks and streams, urban areas, highways, streets and underpasses, as well as other drainage areas and low-lying spots. Areas most vulnerable include poor drainage areas and places where water has already accumulated from earlier rainfall.",
        start: new Date().getTime(),
        end: new Date().getTime() + 7200000, // 2 hours from now
        sender: "NWS Atlanta",
        severity: "Severe",
        impactedAreas: ["Downtown Atlanta", "Eastern Georgia", "Western Georgia"],
        recommendations: [
            "Turn around, don't drown when encountering flooded roads",
            "Most flood deaths occur in vehicles",
            "Move to higher ground",
            "Avoid walking or driving through flood waters"
        ]
    },
    "3": {
        event: "Severe Thunderstorm",
        description: "Severe thunderstorms capable of producing damaging winds and large hail. These storms are moving east at 45 mph. Quarter size hail and wind gusts up to 70 mph are expected. This will impact buildings, vehicles, outdoor activities, and may cause power outages.",
        start: new Date().getTime(),
        end: new Date().getTime() + 3600000, // 1 hour from now
        sender: "NWS Miami",
        severity: "Severe",
        impactedAreas: ["Miami-Dade County", "Southern Florida", "Florida Keys"],
        recommendations: [
            "Move to an interior room on the lowest floor of a building",
            "Stay away from windows",
            "If outdoors, consider seeking shelter inside a building",
            "Secure outdoor objects that could blow away or cause damage"
        ]
    },
    "4": {
        event: "Hurricane Watch",
        description: "A Hurricane Watch is in effect for the east coast of the United States from North Carolina to New York. Hurricane conditions are possible within the next 48 hours. Preparations to protect life and property should be rushed to completion in these areas.",
        start: new Date().getTime(),
        end: new Date().getTime() + 172800000, // 48 hours from now
        sender: "National Hurricane Center",
        severity: "Extreme",
        impactedAreas: ["North Carolina Coast", "Virginia Coast", "Delaware", "New Jersey Shore", "Long Island"],
        recommendations: [
            "Review your hurricane plan",
            "Check supplies and emergency kit",
            "Fuel vehicles and generators",
            "Begin securing property and outdoor items",
            "Be ready to evacuate if directed by local officials"
        ]
    },
    "5": {
        event: "Extreme Heat",
        description: "Dangerously hot conditions with temperatures up to 110°F expected. The combination of hot temperatures and high humidity will create a dangerous situation in which heat illnesses are likely.",
        start: new Date().getTime(),
        end: new Date().getTime() + 86400000, // 24 hours from now
        sender: "NWS Phoenix",
        severity: "Severe",
        impactedAreas: ["Phoenix Metro Area", "Central Arizona", "Southern Arizona"],
        recommendations: [
            "Drink plenty of fluids",
            "Stay in air-conditioned rooms",
            "Stay out of the sun",
            "Check on relatives and neighbors",
            "Never leave young children or pets unattended in vehicles"
        ]
    },
    "6": {
        event: "Winter Storm",
        description: "Heavy snow expected. Total snow accumulations of 6 to 10 inches, with localized amounts up to 12 inches. Travel will be very difficult to impossible. The hazardous conditions will impact the morning and evening commutes.",
        start: new Date().getTime(),
        end: new Date().getTime() + 86400000, // 24 hours from now
        sender: "NWS Boston",
        severity: "Moderate",
        impactedAreas: ["Greater Boston", "Eastern Massachusetts", "Rhode Island"],
        recommendations: [
            "If you must travel, keep an extra flashlight, food, and water in your vehicle",
            "The latest road conditions can be obtained by calling 5-1-1",
            "Allow extra time for travel",
            "Prepare for power outages"
        ]
    }
};

export default function WeatherAlertDetails() {
    const router = useRouter();
    const { id, type, region } = router.query;
    const [alertDetails, setAlertDetails] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [downloadingReport, setDownloadingReport] = useState(false);

    useEffect(() => {
        if (router.isReady && id) {
            // In a real application, fetch the details from an API
            // For now, use our mock data
            setLoading(true);
            try {
                const mockId = id as string;
                if (alertDetailsMock[mockId as keyof typeof alertDetailsMock]) {
                    setAlertDetails(alertDetailsMock[mockId as keyof typeof alertDetailsMock]);
                    setError(null);
                } else {
                    setError("Alert details not found");
                }
            } catch (err) {
                console.error("Error fetching alert details:", err);
                setError("Failed to fetch alert details");
            } finally {
                setLoading(false);
            }
        }
    }, [router.isReady, id]);

    const getAlertIcon = (event: string) => {
        const eventLower = event?.toLowerCase() || "";
        if (eventLower.includes('tornado')) {
            return <CloudLightning size={24} className="text-red-500" />;
        } else if (eventLower.includes('flood')) {
            return <Waves size={24} className="text-blue-500" />;
        } else if (eventLower.includes('storm') || eventLower.includes('thunder')) {
            return <CloudRain size={24} className="text-amber-500" />;
        } else if (eventLower.includes('hurricane')) {
            return <Wind size={24} className="text-purple-500" />;
        } else if (eventLower.includes('heat')) {
            return <Thermometer size={24} className="text-pink-500" />;
        } else if (eventLower.includes('winter')) {
            return <Cloud size={24} className="text-indigo-500" />;
        }
        return <AlertTriangle size={24} className="text-yellow-500" />;
    };

    const getSeverityColor = (severity: string = "") => {
        const severityLower = severity.toLowerCase();
        if (severityLower.includes('extreme')) return 'bg-red-500 text-white';
        if (severityLower.includes('severe')) return 'bg-orange-500 text-white';
        if (severityLower.includes('moderate')) return 'bg-amber-500 text-white';
        return 'bg-yellow-500 text-white';
    };

    const formatDateTime = (timestamp: number) => {
        return new Date(timestamp).toLocaleString();
    };

    // Function to generate and download the alert report as PDF
    const handleDownloadReport = () => {
        setDownloadingReport(true);

        // In a real application, we would call an API to generate the PDF
        // For this demo, we'll simulate a download delay
        setTimeout(() => {
            try {
                // Create alert report content as a text blob
                const reportContent = `
                WEATHER ALERT REPORT
                ---------------------
                
                Event: ${alertDetails.event}
                Severity: ${alertDetails.severity}
                Start Time: ${formatDateTime(alertDetails.start)}
                End Time: ${formatDateTime(alertDetails.end)}
                Issued by: ${alertDetails.sender}
                
                DESCRIPTION
                -----------
                ${alertDetails.description}
                
                IMPACTED AREAS
                --------------
                ${alertDetails.impactedAreas.join('\n')}
                
                RECOMMENDATIONS
                --------------
                ${alertDetails.recommendations.join('\n')}
                
                Generated on: ${new Date().toLocaleString()}
                Walgreens Critical Event Management System
                `;

                // Create blob and download link
                const blob = new Blob([reportContent], { type: 'text/plain' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = `Weather_Alert_Report_${alertDetails.event.replace(/\s+/g, '_')}.txt`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            } catch (err) {
                console.error("Error generating report:", err);
            } finally {
                setDownloadingReport(false);
            }
        }, 2000);
    };

    return (
        <MainLayout>
            <Head>
                <title>Weather Alert Details</title>
            </Head>
            <div className="container mx-auto py-6">
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>Error: {error}</div>
                ) : alertDetails ? (
                    <>
                        <div className="flex items-center mb-6">
                            <button onClick={() => router.back()} className="flex items-center text-blue-500 hover:underline">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back
                            </button>
                        </div>
                        <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                            <div className="p-4 border-b border-dark-300/30">
                                <div className="flex items-center">
                                    {getAlertIcon(alertDetails.event)}
                                    <h1 className="text-xl font-semibold ml-3">{alertDetails.event}</h1>
                                </div>
                                <div className={`mt-2 inline-block px-3 py-1 rounded-full text-sm ${getSeverityColor(alertDetails.severity)}`}>
                                    {alertDetails.severity}
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <h2 className="text-lg font-semibold mb-3">Alert Details</h2>
                                        <div className="bg-dark-200/50 rounded-lg p-4">
                                            <p className="text-dark-700">{alertDetails.description}</p>

                                            <div className="mt-4 flex items-center text-dark-700">
                                                <Clock className="h-4 w-4 mr-2" />
                                                <span className="text-sm">
                                                    From {formatDateTime(alertDetails.start)} to {formatDateTime(alertDetails.end)}
                                                </span>
                                            </div>

                                            <div className="mt-2 flex items-center text-dark-700">
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                <span className="text-sm">Issued by {alertDetails.sender}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-semibold mb-3">Impacted Areas</h2>
                                        <div className="bg-dark-200/50 rounded-lg p-4">
                                            <div className="space-y-2">
                                                {alertDetails.impactedAreas.map((area: string, index: number) => (
                                                    <div key={index} className="flex items-center">
                                                        <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                                                        <span>{area}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h2 className="text-lg font-semibold mb-3">Recommendations</h2>
                                    <div className="bg-dark-200/50 rounded-lg p-4">
                                        <ul className="space-y-2 list-disc pl-5">
                                            {alertDetails.recommendations.map((rec: string, index: number) => (
                                                <li key={index}>{rec}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                                <div className="p-4 border-b border-dark-300/30">
                                    <h3 className="text-lg font-semibold">Related Resources</h3>
                                </div>
                                <div className="p-4">
                                    <div className="space-y-3">
                                        <Link href="https://www.weather.gov" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2 rounded-lg hover:bg-dark-200/70 transition-colors">
                                            <div className="flex items-center">
                                                <CloudRain className="h-4 w-4 text-blue-400 mr-2" />
                                                <span className="text-sm">National Weather Service</span>
                                            </div>
                                            <ExternalLink className="h-4 w-4" />
                                        </Link>
                                        <Link href="https://www.fema.gov/emergency-managers/risk-management/hazard-mitigation-planning" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2 rounded-lg hover:bg-dark-200/70 transition-colors">
                                            <div className="flex items-center">
                                                <AlertTriangle className="h-4 w-4 text-blue-400 mr-2" />
                                                <span className="text-sm">FEMA Hazard Mitigation</span>
                                            </div>
                                            <ExternalLink className="h-4 w-4" />
                                        </Link>
                                        <Link href="https://www.ready.gov" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2 rounded-lg hover:bg-dark-200/70 transition-colors">
                                            <div className="flex items-center">
                                                <AlertTriangle className="h-4 w-4 text-blue-400 mr-2" />
                                                <span className="text-sm">Ready.gov Emergency Preparedness</span>
                                            </div>
                                            <ExternalLink className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                                <div className="p-4 border-b border-dark-300/30">
                                    <h3 className="text-lg font-semibold">Actions</h3>
                                </div>
                                <div className="p-4">
                                    <div className="space-y-3">
                                        <button
                                            onClick={handleDownloadReport}
                                            className="w-full flex items-center justify-center bg-dark-300/70 hover:bg-dark-300 py-2 px-4 rounded-md transition-colors"
                                            disabled={downloadingReport}
                                        >
                                            {downloadingReport ? "Downloading..." : "Download Alert Report"}
                                        </button>
                                        <Link href={`/impacted-stores/${id}`} className="w-full flex items-center justify-center bg-dark-300/70 hover:bg-dark-300 py-2 px-4 rounded-md transition-colors">
                                            View Impacted Stores
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 p-4 rounded-lg">
                        <h2 className="text-lg font-bold mb-2">Alert Not Found</h2>
                        <p>The requested weather alert could not be found.</p>
                        <Link href="/weather-alerts" className="mt-4 inline-block px-4 py-2 bg-dark-300/70 hover:bg-dark-300 rounded-md transition-colors">
                            Return to Weather Alerts
                        </Link>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}