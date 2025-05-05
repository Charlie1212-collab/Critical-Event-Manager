import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icon issues in Next.js
// This is needed because Leaflet's default icons reference resources on the filesystem that aren't available in Next.js
const DefaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Custom marker icons based on store status
const createCustomIcon = (status: string) => {
    let color = "#4ade80"; // green for open

    if (status.toLowerCase().includes("closed")) {
        color = "#ef4444"; // red for closed
    } else if (status.toLowerCase().includes("limited") || status.toLowerCase().includes("preparing")) {
        color = "#f59e0b"; // amber for limited/preparing
    }

    return L.divIcon({
        className: "custom-div-icon",
        html: `<div style="background-color: ${color}; width: 12px; height: 12px; border: 2px solid white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.3);"></div>`,
        iconSize: [12, 12],
        iconAnchor: [6, 6]
    });
};

// Component to update map view when props change
function MapUpdater({ center, zoom, selectedStore }: { center: any, zoom: number, selectedStore: any }) {
    const map = useMap();

    useEffect(() => {
        if (center) {
            map.setView([center.lat, center.lng], zoom);
        }
    }, [center, zoom, map]);

    useEffect(() => {
        if (selectedStore) {
            map.setView([selectedStore.lat, selectedStore.lng], 15);
        }
    }, [selectedStore, map]);

    return null;
}

interface StoreMapComponentProps {
    stores: any[];
    center: { lat: number; lng: number };
    zoom: number;
    selectedStore: any;
    onSelectStore: (store: any) => void;
}

export default function StoreMapComponent({
    stores,
    center,
    zoom,
    selectedStore,
    onSelectStore
}: StoreMapComponentProps) {
    // Set up Leaflet icons once
    useEffect(() => {
        L.Marker.prototype.options.icon = DefaultIcon;
    }, []);

    return (
        <MapContainer
            center={[center.lat, center.lng]}
            zoom={zoom}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {stores.map((store) => (
                <Marker
                    key={store.id}
                    position={[store.lat, store.lng]}
                    icon={createCustomIcon(store.status)}
                    eventHandlers={{
                        click: () => {
                            onSelectStore(store);
                        }
                    }}
                >
                    <Popup>
                        <div className="text-sm">
                            <h3 className="font-medium">{store.name}</h3>
                            <p className="text-slate-600">{store.address}</p>
                            <p className="mt-1">
                                <span
                                    className={`px-2 py-0.5 text-xs rounded-full ${store.status.toLowerCase().includes('closed') ? 'bg-red-100 text-red-800' :
                                            store.status.toLowerCase().includes('limited') || store.status.toLowerCase().includes('preparing') ? 'bg-amber-100 text-amber-800' :
                                                'bg-green-100 text-green-800'
                                        }`}
                                >
                                    {store.status}
                                </span>
                            </p>
                            <p className="mt-1 text-slate-600">{store.distance}</p>
                            <div className="mt-2 flex gap-2">
                                <a
                                    href={`tel:${store.phone.replace(/[^\d]/g, '')}`}
                                    className="text-xs px-2 py-1 bg-blue-500 text-white rounded"
                                >
                                    Call
                                </a>
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs px-2 py-1 bg-slate-200 hover:bg-slate-300 rounded"
                                >
                                    Directions
                                </a>
                            </div>
                        </div>
                    </Popup>
                </Marker>
            ))}

            <MapUpdater center={center} zoom={zoom} selectedStore={selectedStore} />
        </MapContainer>
    );
}