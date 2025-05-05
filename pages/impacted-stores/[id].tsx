import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";
import { MapPin, ArrowLeft, Store, AlertTriangle, Phone, Navigation, Clock } from "lucide-react";

// Mock data for stores impacted by each alert type
// In a real application, this would come from an API call
const impactedStoresMock = {
    // Tornado Warning stores (id: 1)
    "1": [
        { id: 1, name: "Walgreens #1234", address: "123 Main St, Chicago, IL 60601", phone: "(312) 555-1234", status: "Closed", distance: "0.8 miles from event" },
        { id: 2, name: "Walgreens #2345", address: "456 State St, Chicago, IL 60605", phone: "(312) 555-2345", status: "Open - Limited Hours", distance: "1.2 miles from event" },
        { id: 3, name: "Walgreens #3456", address: "789 Michigan Ave, Chicago, IL 60611", phone: "(312) 555-3456", status: "Closed", distance: "1.5 miles from event" },
        { id: 4, name: "Walgreens #4567", address: "101 Wacker Dr, Chicago, IL 60606", phone: "(312) 555-4567", status: "Open - Generator Power", distance: "2.3 miles from event" },
        { id: 5, name: "Walgreens #5678", address: "202 Madison St, Chicago, IL 60603", phone: "(312) 555-5678", status: "Closed", distance: "3.1 miles from event" },
    ],
    // Flash Flood stores (id: 2)
    "2": [
        { id: 6, name: "Walgreens #6789", address: "303 Peachtree St, Atlanta, GA 30308", phone: "(404) 555-6789", status: "Closed - Flooding", distance: "0.5 miles from event" },
        { id: 7, name: "Walgreens #7890", address: "404 Marietta St, Atlanta, GA 30313", phone: "(404) 555-7890", status: "Closed - Flooding", distance: "1.7 miles from event" },
        { id: 8, name: "Walgreens #8901", address: "505 Piedmont Ave, Atlanta, GA 30308", phone: "(404) 555-8901", status: "Open - Limited Access", distance: "2.4 miles from event" },
    ],
    // Severe Thunderstorm stores (id: 3)
    "3": [
        { id: 9, name: "Walgreens #9012", address: "606 Biscayne Blvd, Miami, FL 33132", phone: "(305) 555-9012", status: "Open", distance: "1.8 miles from event" },
        { id: 10, name: "Walgreens #0123", address: "707 Collins Ave, Miami Beach, FL 33139", phone: "(305) 555-0123", status: "Open - Generator Power", distance: "2.5 miles from event" },
        { id: 11, name: "Walgreens #1234", address: "808 Ocean Dr, Miami Beach, FL 33139", phone: "(305) 555-1234", status: "Closed - Power Outage", distance: "3.1 miles from event" },
        { id: 12, name: "Walgreens #2345", address: "909 Coral Way, Miami, FL 33145", phone: "(305) 555-2345", status: "Open", distance: "4.2 miles from event" },
    ],
    // Hurricane Watch stores (id: 4)
    "4": [
        { id: 13, name: "Walgreens #3456", address: "111 Coastal Hwy, Wilmington, NC 28401", phone: "(910) 555-3456", status: "Preparing For Closure", distance: "0.6 miles from coast" },
        { id: 14, name: "Walgreens #4567", address: "222 Boardwalk Ave, Virginia Beach, VA 23451", phone: "(757) 555-4567", status: "Preparing For Closure", distance: "0.8 miles from coast" },
        { id: 15, name: "Walgreens #5678", address: "333 Beach Rd, Atlantic City, NJ 08401", phone: "(609) 555-5678", status: "Preparing For Closure", distance: "0.5 miles from coast" },
        { id: 16, name: "Walgreens #6789", address: "444 Shore Dr, Long Beach, NY 11561", phone: "(516) 555-6789", status: "Preparing For Closure", distance: "0.4 miles from coast" },
        { id: 17, name: "Walgreens #7890", address: "555 Ocean Pkwy, Ocean City, MD 21842", phone: "(410) 555-7890", status: "Preparing For Closure", distance: "0.7 miles from coast" },
        { id: 18, name: "Walgreens #8901", address: "666 Coastal Blvd, Rehoboth Beach, DE 19971", phone: "(302) 555-8901", status: "Preparing For Closure", distance: "0.9 miles from coast" },
    ],
    // Extreme Heat stores (id: 5)
    "5": [
        { id: 19, name: "Walgreens #9012", address: "777 Camelback Rd, Phoenix, AZ 85014", phone: "(602) 555-9012", status: "Open - Extended Hours", distance: "2.1 miles from cooling center" },
        { id: 20, name: "Walgreens #0123", address: "888 McDowell Rd, Phoenix, AZ 85008", phone: "(602) 555-0123", status: "Open - Extended Hours", distance: "1.5 miles from cooling center" },
        { id: 21, name: "Walgreens #1234", address: "999 Bell Rd, Phoenix, AZ 85023", phone: "(602) 555-1234", status: "Open - Extended Hours", distance: "3.4 miles from cooling center" },
        { id: 22, name: "Walgreens #2345", address: "123 Baseline Rd, Tempe, AZ 85283", phone: "(480) 555-2345", status: "Open - Extended Hours", distance: "4.2 miles from cooling center" },
    ],
    // Winter Storm stores (id: 6)
    "6": [
        { id: 23, name: "Walgreens #3456", address: "234 Boylston St, Boston, MA 02116", phone: "(617) 555-3456", status: "Closed - Snow Accumulation", distance: "1.2 miles from plowed road" },
        { id: 24, name: "Walgreens #4567", address: "345 Tremont St, Boston, MA 02116", phone: "(617) 555-4567", status: "Open - Limited Hours", distance: "0.5 miles from plowed road" },
        { id: 25, name: "Walgreens #5678", address: "456 Cambridge St, Cambridge, MA 02141", phone: "(617) 555-5678", status: "Closed - Snow Accumulation", distance: "2.3 miles from plowed road" },
        { id: 26, name: "Walgreens #6789", address: "567 Dorchester Ave, Boston, MA 02127", phone: "(617) 555-6789", status: "Open - Limited Hours", distance: "1.7 miles from plowed road" },
    ],
};

// Weather alert type information (to match alert ID to information)
const alertTypeInfo = {
    "1": { event: "Tornado Warning", severity: "Extreme", icon: <AlertTriangle size={24} className="text-red-500" /> },
    "2": { event: "Flash Flood", severity: "Severe", icon: <AlertTriangle size={24} className="text-blue-500" /> },
    "3": { event: "Severe Thunderstorm", severity: "Severe", icon: <AlertTriangle size={24} className="text-amber-500" /> },
    "4": { event: "Hurricane Watch", severity: "Extreme", icon: <AlertTriangle size={24} className="text-purple-500" /> },
    "5": { event: "Extreme Heat", severity: "Severe", icon: <AlertTriangle size={24} className="text-pink-500" /> },
    "6": { event: "Winter Storm", severity: "Moderate", icon: <AlertTriangle size={24} className="text-indigo-500" /> },
};

export default function ImpactedStores() {
    const router = useRouter();
    const { id } = router.query;
    const [stores, setStores] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [alertInfo, setAlertInfo] = useState<any>(null);

    useEffect(() => {
        if (router.isReady && id) {
            setLoading(true);

            // In a real app, you'd fetch this data from an API
            const alertId = id as string;

            if (impactedStoresMock[alertId as keyof typeof impactedStoresMock]) {
                setStores(impactedStoresMock[alertId as keyof typeof impactedStoresMock]);
                setAlertInfo(alertTypeInfo[alertId as keyof typeof alertTypeInfo]);
            } else {
                setStores([]);
                setAlertInfo(null);
            }

            setLoading(false);
        }
    }, [router.isReady, id]);

    function getStatusColor(status: string) {
        if (status.toLowerCase().includes('closed')) {
            return 'bg-red-500/10 text-red-500';
        } else if (status.toLowerCase().includes('limited') || status.toLowerCase().includes('preparing')) {
            return 'bg-amber-500/10 text-amber-500';
        } else {
            return 'bg-green-500/10 text-green-500';
        }
    }

    // Navigate to map view for a specific store
    const handleViewOnMap = (storeId?: number) => {
        if (storeId) {
            router.push(`/store-map/${id}?storeId=${storeId}`);
        } else {
            router.push(`/store-map/${id}`);
        }
    };

    if (loading) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-[50vh]">
                    <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <Head>
                <title>
                    {stores.length > 0
                        ? `${stores.length} Impacted Stores | ${alertInfo?.event}`
                        : "Impacted Stores"} | Critical Event Management
                </title>
            </Head>

            <div className="container mx-auto p-6">
                <div className="mb-4 flex items-center justify-between">
                    <Link
                        href={`/weather-alerts/${id}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-500 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Back to Alert Details
                    </Link>

                    <div className="flex items-center">
                        {alertInfo?.icon}
                        <span className="text-sm ml-2">
                            {alertInfo?.event} •
                            <span className={`ml-1 ${alertInfo?.severity === 'Extreme' ? 'text-red-500' :
                                alertInfo?.severity === 'Severe' ? 'text-orange-500' : 'text-amber-500'
                                }`}>
                                {alertInfo?.severity}
                            </span>
                        </span>
                    </div>
                </div>

                <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden mb-6">
                    <div className="p-4 border-b border-dark-300/30 flex justify-between items-center">
                        <h1 className="text-xl font-bold">Impacted Walgreens Stores</h1>
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm">
                                {stores.length} {stores.length === 1 ? 'Store' : 'Stores'} Found
                            </span>
                            {stores.length > 0 && (
                                <button
                                    onClick={() => handleViewOnMap()}
                                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm transition-colors flex items-center"
                                >
                                    <MapPin className="h-3 w-3 mr-1" />
                                    View All on Map
                                </button>
                            )}
                        </div>
                    </div>

                    {stores.length > 0 ? (
                        <div className="p-4">
                            {/* Mobile view - card format */}
                            <div className="grid grid-cols-1 gap-4 md:hidden">
                                {stores.map((store) => (
                                    <div key={store.id} className="bg-dark-200/50 rounded-lg p-4 border-l-4 border-blue-500">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-medium">{store.name}</h3>
                                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(store.status)}`}>
                                                {store.status}
                                            </span>
                                        </div>
                                        <div className="mt-2 flex items-start">
                                            <MapPin className="h-4 w-4 text-dark-700 mr-2 mt-0.5" />
                                            <span className="text-sm text-dark-700">{store.address}</span>
                                        </div>
                                        <div className="mt-2 flex items-center">
                                            <Phone className="h-4 w-4 text-dark-700 mr-2" />
                                            <span className="text-sm text-dark-700">{store.phone}</span>
                                        </div>
                                        <div className="mt-2 flex items-center text-dark-700 text-sm">
                                            <Navigation className="h-4 w-4 mr-2" />
                                            <span>{store.distance}</span>
                                        </div>
                                        <div className="mt-3 flex space-x-2">
                                            <a
                                                href={`tel:${store.phone.replace(/[^\d]/g, '')}`}
                                                className="text-xs px-3 py-1 bg-blue-500 text-white rounded-md"
                                            >
                                                Call Store
                                            </a>
                                            <button
                                                onClick={() => handleViewOnMap(store.id)}
                                                className="text-xs px-3 py-1 bg-dark-300/70 hover:bg-dark-300 rounded-md transition-colors"
                                            >
                                                View on Map
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop view - table format */}
                            <div className="hidden md:block overflow-x-auto">
                                <table className="min-w-full">
                                    <thead>
                                        <tr className="text-left text-dark-700 bg-dark-300/20">
                                            <th className="py-3 px-4 font-medium">Store Name</th>
                                            <th className="py-3 px-4 font-medium">Address</th>
                                            <th className="py-3 px-4 font-medium">Status</th>
                                            <th className="py-3 px-4 font-medium">Phone</th>
                                            <th className="py-3 px-4 font-medium">Distance</th>
                                            <th className="py-3 px-4 font-medium">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stores.map((store, index) => (
                                            <tr
                                                key={store.id}
                                                className={`${index % 2 === 0 ? 'bg-dark-200/25' : 'bg-dark-200/50'}`}
                                            >
                                                <td className="py-3 px-4">{store.name}</td>
                                                <td className="py-3 px-4 text-dark-700">{store.address}</td>
                                                <td className="py-3 px-4">
                                                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(store.status)}`}>
                                                        {store.status}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4 text-dark-700">{store.phone}</td>
                                                <td className="py-3 px-4 text-dark-700">{store.distance}</td>
                                                <td className="py-3 px-4">
                                                    <div className="flex space-x-2">
                                                        <a
                                                            href={`tel:${store.phone.replace(/[^\d]/g, '')}`}
                                                            className="text-xs px-2 py-1 bg-blue-500 text-white rounded-md"
                                                        >
                                                            Call
                                                        </a>
                                                        <button
                                                            onClick={() => handleViewOnMap(store.id)}
                                                            className="text-xs px-2 py-1 bg-dark-300/70 hover:bg-dark-300 rounded-md transition-colors"
                                                        >
                                                            Map
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div className="p-6 text-center">
                            <div className="bg-amber-500/10 p-4 rounded-lg inline-flex flex-col items-center">
                                <Store className="h-10 w-10 text-amber-500 mb-2" />
                                <h3 className="font-medium">No stores impacted by this alert</h3>
                                <p className="text-sm text-dark-700 mt-1">
                                    There are no Walgreens stores currently within the affected area.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                    <div className="p-4 border-b border-dark-300/30">
                        <h2 className="text-lg font-semibold">Store Operations Summary</h2>
                    </div>
                    <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-dark-200/50 rounded-lg p-4">
                                <div className="flex justify-between">
                                    <h3 className="font-medium text-red-500">Closed</h3>
                                    <span className="text-xl font-bold text-red-500">
                                        {stores.filter(s => s.status.toLowerCase().includes('closed')).length}
                                    </span>
                                </div>
                                <p className="text-sm text-dark-700 mt-1">
                                    Stores currently closed due to weather conditions
                                </p>
                            </div>
                            <div className="bg-dark-200/50 rounded-lg p-4">
                                <div className="flex justify-between">
                                    <h3 className="font-medium text-amber-500">Limited Operations</h3>
                                    <span className="text-xl font-bold text-amber-500">
                                        {stores.filter(s => s.status.toLowerCase().includes('limited') || s.status.toLowerCase().includes('preparing')).length}
                                    </span>
                                </div>
                                <p className="text-sm text-dark-700 mt-1">
                                    Stores operating with limited hours or services
                                </p>
                            </div>
                            <div className="bg-dark-200/50 rounded-lg p-4">
                                <div className="flex justify-between">
                                    <h3 className="font-medium text-green-500">Fully Operational</h3>
                                    <span className="text-xl font-bold text-green-500">
                                        {stores.filter(s => !s.status.toLowerCase().includes('closed') && !s.status.toLowerCase().includes('limited') && !s.status.toLowerCase().includes('preparing')).length}
                                    </span>
                                </div>
                                <p className="text-sm text-dark-700 mt-1">
                                    Stores operating normally despite weather conditions
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                Schedule Status Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}