import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import MainLayout from "../../components/MainLayout";
import { MapPin, ArrowLeft, Store, AlertTriangle, Navigation } from "lucide-react";

// Import map component dynamically to avoid SSR issues with Leaflet
const StoreMapComponent = dynamic(() => import("../../components/StoreMapComponent"), {
    ssr: false,
    loading: () => (
        <div className="flex justify-center items-center h-[600px]">
            <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
    ),
});

// Mock data for stores impacted by each alert type
// In a real application, this would come from an API call
const impactedStoresMock = {
    // Tornado Warning stores (id: 1)
    "1": [
        {
            id: 1,
            name: "Walgreens #1234",
            address: "123 Main St, Chicago, IL 60601",
            phone: "(312) 555-1234",
            status: "Closed",
            distance: "0.8 miles from event",
            lat: 41.8781,
            lng: -87.6298
        },
        {
            id: 2,
            name: "Walgreens #2345",
            address: "456 State St, Chicago, IL 60605",
            phone: "(312) 555-2345",
            status: "Open - Limited Hours",
            distance: "1.2 miles from event",
            lat: 41.8757,
            lng: -87.6288
        },
        {
            id: 3,
            name: "Walgreens #3456",
            address: "789 Michigan Ave, Chicago, IL 60611",
            phone: "(312) 555-3456",
            status: "Closed",
            distance: "1.5 miles from event",
            lat: 41.8920,
            lng: -87.6245
        },
        {
            id: 4,
            name: "Walgreens #4567",
            address: "101 Wacker Dr, Chicago, IL 60606",
            phone: "(312) 555-4567",
            status: "Open - Generator Power",
            distance: "2.3 miles from event",
            lat: 41.8869,
            lng: -87.6363
        },
        {
            id: 5,
            name: "Walgreens #5678",
            address: "202 Madison St, Chicago, IL 60603",
            phone: "(312) 555-5678",
            status: "Closed",
            distance: "3.1 miles from event",
            lat: 41.8820,
            lng: -87.6321
        },
    ],
    // Flash Flood stores (id: 2)
    "2": [
        {
            id: 6,
            name: "Walgreens #6789",
            address: "303 Peachtree St, Atlanta, GA 30308",
            phone: "(404) 555-6789",
            status: "Closed - Flooding",
            distance: "0.5 miles from event",
            lat: 33.7590,
            lng: -84.3870
        },
        {
            id: 7,
            name: "Walgreens #7890",
            address: "404 Marietta St, Atlanta, GA 30313",
            phone: "(404) 555-7890",
            status: "Closed - Flooding",
            distance: "1.7 miles from event",
            lat: 33.7680,
            lng: -84.3951
        },
        {
            id: 8,
            name: "Walgreens #8901",
            address: "505 Piedmont Ave, Atlanta, GA 30308",
            phone: "(404) 555-8901",
            status: "Open - Limited Access",
            distance: "2.4 miles from event",
            lat: 33.7720,
            lng: -84.3821
        },
    ],
    // Severe Thunderstorm stores (id: 3)
    "3": [
        {
            id: 9,
            name: "Walgreens #9012",
            address: "606 Biscayne Blvd, Miami, FL 33132",
            phone: "(305) 555-9012",
            status: "Open",
            distance: "1.8 miles from event",
            lat: 25.7781,
            lng: -80.1894
        },
        {
            id: 10,
            name: "Walgreens #0123",
            address: "707 Collins Ave, Miami Beach, FL 33139",
            phone: "(305) 555-0123",
            status: "Open - Generator Power",
            distance: "2.5 miles from event",
            lat: 25.7895,
            lng: -80.1308
        },
        {
            id: 11,
            name: "Walgreens #1234",
            address: "808 Ocean Dr, Miami Beach, FL 33139",
            phone: "(305) 555-1234",
            status: "Closed - Power Outage",
            distance: "3.1 miles from event",
            lat: 25.7825,
            lng: -80.1338
        },
        {
            id: 12,
            name: "Walgreens #2345",
            address: "909 Coral Way, Miami, FL 33145",
            phone: "(305) 555-2345",
            status: "Open",
            distance: "4.2 miles from event",
            lat: 25.7510,
            lng: -80.2342
        },
    ],
    // Hurricane Watch stores (id: 4)
    "4": [
        {
            id: 13,
            name: "Walgreens #3456",
            address: "111 Coastal Hwy, Wilmington, NC 28401",
            phone: "(910) 555-3456",
            status: "Preparing For Closure",
            distance: "0.6 miles from coast",
            lat: 34.2358,
            lng: -77.9457
        },
        {
            id: 14,
            name: "Walgreens #4567",
            address: "222 Boardwalk Ave, Virginia Beach, VA 23451",
            phone: "(757) 555-4567",
            status: "Preparing For Closure",
            distance: "0.8 miles from coast",
            lat: 36.8516,
            lng: -75.9785
        },
        {
            id: 15,
            name: "Walgreens #5678",
            address: "333 Beach Rd, Atlantic City, NJ 08401",
            phone: "(609) 555-5678",
            status: "Preparing For Closure",
            distance: "0.5 miles from coast",
            lat: 39.3643,
            lng: -74.4229
        },
        {
            id: 16,
            name: "Walgreens #6789",
            address: "444 Shore Dr, Long Beach, NY 11561",
            phone: "(516) 555-6789",
            status: "Preparing For Closure",
            distance: "0.4 miles from coast",
            lat: 40.5884,
            lng: -73.6579
        },
        {
            id: 17,
            name: "Walgreens #7890",
            address: "555 Ocean Pkwy, Ocean City, MD 21842",
            phone: "(410) 555-7890",
            status: "Preparing For Closure",
            distance: "0.7 miles from coast",
            lat: 38.3362,
            lng: -75.0847
        },
        {
            id: 18,
            name: "Walgreens #8901",
            address: "666 Coastal Blvd, Rehoboth Beach, DE 19971",
            phone: "(302) 555-8901",
            status: "Preparing For Closure",
            distance: "0.9 miles from coast",
            lat: 38.7169,
            lng: -75.0769
        },
    ],
    // Extreme Heat stores (id: 5)
    "5": [
        {
            id: 19,
            name: "Walgreens #9012",
            address: "777 Camelback Rd, Phoenix, AZ 85014",
            phone: "(602) 555-9012",
            status: "Open - Extended Hours",
            distance: "2.1 miles from cooling center",
            lat: 33.5083,
            lng: -112.0747
        },
        {
            id: 20,
            name: "Walgreens #0123",
            address: "888 McDowell Rd, Phoenix, AZ 85008",
            phone: "(602) 555-0123",
            status: "Open - Extended Hours",
            distance: "1.5 miles from cooling center",
            lat: 33.4516,
            lng: -112.0210
        },
        {
            id: 21,
            name: "Walgreens #1234",
            address: "999 Bell Rd, Phoenix, AZ 85023",
            phone: "(602) 555-1234",
            status: "Open - Extended Hours",
            distance: "3.4 miles from cooling center",
            lat: 33.6386,
            lng: -112.0823
        },
        {
            id: 22,
            name: "Walgreens #2345",
            address: "123 Baseline Rd, Tempe, AZ 85283",
            phone: "(480) 555-2345",
            status: "Open - Extended Hours",
            distance: "4.2 miles from cooling center",
            lat: 33.3774,
            lng: -111.9431
        },
    ],
    // Winter Storm stores (id: 6)
    "6": [
        {
            id: 23,
            name: "Walgreens #3456",
            address: "234 Boylston St, Boston, MA 02116",
            phone: "(617) 555-3456",
            status: "Closed - Snow Accumulation",
            distance: "1.2 miles from plowed road",
            lat: 42.3517,
            lng: -71.0723
        },
        {
            id: 24,
            name: "Walgreens #4567",
            address: "345 Tremont St, Boston, MA 02116",
            phone: "(617) 555-4567",
            status: "Open - Limited Hours",
            distance: "0.5 miles from plowed road",
            lat: 42.3454,
            lng: -71.0699
        },
        {
            id: 25,
            name: "Walgreens #5678",
            address: "456 Cambridge St, Cambridge, MA 02141",
            phone: "(617) 555-5678",
            status: "Closed - Snow Accumulation",
            distance: "2.3 miles from plowed road",
            lat: 42.3733,
            lng: -71.0822
        },
        {
            id: 26,
            name: "Walgreens #6789",
            address: "567 Dorchester Ave, Boston, MA 02127",
            phone: "(617) 555-6789",
            status: "Open - Limited Hours",
            distance: "1.7 miles from plowed road",
            lat: 42.3360,
            lng: -71.0581
        },
    ],
};

// Weather alert type information (to match alert ID to information)
const alertTypeInfo = {
    "1": {
        event: "Tornado Warning",
        severity: "Extreme",
        icon: <AlertTriangle size={24} className="text-red-500" />,
        center: { lat: 41.8781, lng: -87.6298 }, // Chicago
        zoom: 12
    },
    "2": {
        event: "Flash Flood",
        severity: "Severe",
        icon: <AlertTriangle size={24} className="text-blue-500" />,
        center: { lat: 33.7490, lng: -84.3880 }, // Atlanta
        zoom: 12
    },
    "3": {
        event: "Severe Thunderstorm",
        severity: "Severe",
        icon: <AlertTriangle size={24} className="text-amber-500" />,
        center: { lat: 25.7617, lng: -80.1918 }, // Miami
        zoom: 11
    },
    "4": {
        event: "Hurricane Watch",
        severity: "Extreme",
        icon: <AlertTriangle size={24} className="text-purple-500" />,
        center: { lat: 38.3362, lng: -75.0847 }, // Mid-Atlantic coast
        zoom: 6
    },
    "5": {
        event: "Extreme Heat",
        severity: "Severe",
        icon: <AlertTriangle size={24} className="text-pink-500" />,
        center: { lat: 33.4484, lng: -112.0740 }, // Phoenix
        zoom: 11
    },
    "6": {
        event: "Winter Storm",
        severity: "Moderate",
        icon: <AlertTriangle size={24} className="text-indigo-500" />,
        center: { lat: 42.3601, lng: -71.0589 }, // Boston
        zoom: 12
    },
};

export default function StoreMapView() {
    const router = useRouter();
    const { id, storeId } = router.query;
    const [stores, setStores] = useState<any[]>([]);
    const [selectedStore, setSelectedStore] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [alertInfo, setAlertInfo] = useState<any>(null);

    useEffect(() => {
        if (router.isReady && id) {
            setLoading(true);

            // In a real app, you'd fetch this data from an API
            const alertId = id as string;

            if (impactedStoresMock[alertId as keyof typeof impactedStoresMock]) {
                const storesList = impactedStoresMock[alertId as keyof typeof impactedStoresMock];
                setStores(storesList);

                // If storeId is provided, select that specific store
                if (storeId) {
                    const specificStore = storesList.find(store => store.id.toString() === storeId);
                    if (specificStore) {
                        setSelectedStore(specificStore);
                    }
                }

                setAlertInfo(alertTypeInfo[alertId as keyof typeof alertTypeInfo]);
            } else {
                setStores([]);
                setAlertInfo(null);
            }

            setLoading(false);
        }
    }, [router.isReady, id, storeId]);

    function getStatusColor(status: string) {
        if (status.toLowerCase().includes('closed')) {
            return 'bg-red-500/10 text-red-500 border-red-500';
        } else if (status.toLowerCase().includes('limited') || status.toLowerCase().includes('preparing')) {
            return 'bg-amber-500/10 text-amber-500 border-amber-500';
        } else {
            return 'bg-green-500/10 text-green-500 border-green-500';
        }
    }

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
                    {alertInfo?.event ? `Impacted Stores Map | ${alertInfo.event}` : "Store Map"} | Critical Event Management
                </title>
            </Head>

            <div className="container mx-auto p-6">
                <div className="mb-4 flex items-center justify-between">
                    <Link
                        href={`/impacted-stores/${id}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-500 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Back to Impacted Stores List
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

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-3">
                        <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                            <div className="p-4 border-b border-dark-300/30 flex items-center justify-between">
                                <h1 className="text-xl font-bold flex items-center">
                                    <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                                    Impacted Stores Map
                                </h1>
                                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm">
                                    {stores.length} {stores.length === 1 ? 'Store' : 'Stores'} Found
                                </span>
                            </div>

                            <div className="h-[600px] relative">
                                {stores.length > 0 && alertInfo ? (
                                    <StoreMapComponent
                                        stores={stores}
                                        center={alertInfo.center}
                                        zoom={alertInfo.zoom}
                                        selectedStore={selectedStore}
                                        onSelectStore={(store) => setSelectedStore(store)}
                                    />
                                ) : (
                                    <div className="flex justify-center items-center h-full bg-dark-200/50">
                                        <div className="text-center p-6">
                                            <Store className="h-12 w-12 text-dark-700 mx-auto mb-3" />
                                            <h3 className="text-lg font-medium">No Stores to Display</h3>
                                            <p className="text-dark-700 mt-2">
                                                There are no stores impacted by this weather event.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <div className="sticky top-6">
                            <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden mb-6">
                                <div className="p-4 border-b border-dark-300/30">
                                    <h2 className="font-semibold">Store List</h2>
                                </div>
                                <div className="p-0">
                                    <div className="max-h-[350px] overflow-y-auto">
                                        {stores.map((store) => (
                                            <div
                                                key={store.id}
                                                className={`p-3 border-b border-dark-300/10 hover:bg-dark-200/50 cursor-pointer transition-colors ${selectedStore?.id === store.id ? 'bg-dark-200/70' : ''}`}
                                                onClick={() => setSelectedStore(store)}
                                            >
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <p className="font-medium">{store.name}</p>
                                                        <p className="text-xs text-dark-700 mt-1">{store.address}</p>
                                                    </div>
                                                    <div className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(store.status)}`}>
                                                        {store.status.split(' - ')[0]}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {selectedStore && (
                                <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
                                    <div className="p-4 border-b border-dark-300/30">
                                        <h2 className="font-semibold">Selected Store Details</h2>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium">{selectedStore.name}</h3>
                                        <div className="mt-2 space-y-2 text-sm text-dark-700">
                                            <p className="flex items-start">
                                                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-dark-700" />
                                                {selectedStore.address}
                                            </p>
                                            <p>
                                                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedStore.status)}`}>
                                                    {selectedStore.status}
                                                </span>
                                            </p>
                                            <p className="flex items-center">
                                                <Navigation className="h-4 w-4 mr-2 text-dark-700" />
                                                {selectedStore.distance}
                                            </p>
                                        </div>
                                        <div className="mt-4 flex space-x-2">
                                            <a
                                                href={`tel:${selectedStore.phone.replace(/[^\d]/g, '')}`}
                                                className="px-3 py-1 bg-blue-500 text-white rounded-md text-xs"
                                            >
                                                Call Store
                                            </a>
                                            <a
                                                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedStore.address)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-3 py-1 bg-dark-300/70 hover:bg-dark-300 rounded-md transition-colors text-xs"
                                            >
                                                Get Directions
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}