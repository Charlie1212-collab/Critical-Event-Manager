import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import dynamic from 'next/dynamic';

// Dynamically import MapRulerControl to avoid SSR issues
const MapRulerControl = dynamic(
  () => import('./ui/MapRulerControl'),
  { ssr: false }
);

// Mock hurricane data - in a real app this would come from an API
const mockHurricaneData = {
  active: [
    {
      id: 'h1',
      name: 'Hurricane Everett',
      category: 3,
      currentPosition: [24.5, -75.8],
      path: [
        [22.1, -79.3],
        [23.2, -77.5],
        [24.5, -75.8],
        [25.9, -74.2],
        [27.6, -72.8]
      ],
      windSpeed: 115,
      pressure: 956,
      movementDirection: 'NNW',
      movementSpeed: 12
    },
    {
      id: 'h2',
      name: 'Hurricane Diana',
      category: 2,
      currentPosition: [16.2, -63.5],
      path: [
        [15.0, -67.2],
        [15.5, -65.4],
        [16.2, -63.5],
        [16.8, -61.7],
        [17.5, -59.8]
      ],
      windSpeed: 96,
      pressure: 978,
      movementDirection: 'NE',
      movementSpeed: 8
    },
    {
      id: 'h3',
      name: 'Hurricane Marcus',
      category: 5,
      currentPosition: [19.8, -85.4],
      path: [
        [18.2, -88.7],
        [18.9, -87.1],
        [19.8, -85.4],
        [20.7, -83.6],
        [21.9, -81.9]
      ],
      windSpeed: 175,
      pressure: 910,
      movementDirection: 'NE',
      movementSpeed: 10
    },
    {
      id: 'h4',
      name: 'Tropical Storm Aria',
      category: 1,
      currentPosition: [28.3, -70.1],
      path: [
        [27.5, -72.4],
        [27.9, -71.3],
        [28.3, -70.1],
        [28.8, -68.9],
        [29.4, -67.5]
      ],
      windSpeed: 74,
      pressure: 990,
      movementDirection: 'NE',
      movementSpeed: 15
    }
  ],
  historical: [
    {
      id: 'h5',
      name: 'Hurricane Greta (2024)',
      category: 4,
      currentPosition: [26.7, -76.8],
      path: [
        [20.1, -85.3],
        [22.4, -82.7],
        [24.5, -80.1],
        [26.7, -76.8],
        [29.2, -72.5],
        [32.1, -68.2]
      ],
      windSpeed: 145,
      pressure: 932,
      movementDirection: 'NNE',
      movementSpeed: 14
    },
    {
      id: 'h6',
      name: 'Hurricane Felix (2024)',
      category: 5,
      currentPosition: [18.9, -66.2],
      path: [
        [15.3, -72.4],
        [16.5, -70.3],
        [17.6, -68.4],
        [18.9, -66.2],
        [20.3, -63.8],
        [22.1, -61.1]
      ],
      windSpeed: 165,
      pressure: 920,
      movementDirection: 'NE',
      movementSpeed: 11
    }
  ]
};

// Function to get color based on hurricane category
const getCategoryColor = (category: number) => {
  switch (category) {
    case 1: return '#5DADE2'; // Blue
    case 2: return '#58D68D'; // Green
    case 3: return '#F4D03F'; // Yellow
    case 4: return '#E67E22'; // Orange
    case 5: return '#E74C3C'; // Red
    default: return '#85929E'; // Gray for tropical storms/depressions
  }
};

// Function to get radius based on hurricane category
const getCategoryRadius = (category: number) => {
  return 8 + (category * 3); // Scales from 11px (category 1) to 23px (category 5)
};

export default function HurricaneMap({
  category,
  status
}: {
  category: string;
  status: 'active' | 'historical';
}) {
  const [hurricanes, setHurricanes] = useState<Array<{
    id: string;
    name: string;
    category: number;
    currentPosition: [number, number];
    path: [number, number][];
    windSpeed: number;
    pressure: number;
    movementDirection: string;
    movementSpeed: number;
  }>>([]);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Filter hurricanes based on category and status
    const statusData = mockHurricaneData[status] || [];
    let filtered = [...statusData];

    if (category !== 'all') {
      const categoryNumber = parseInt(category.replace('cat', ''));
      filtered = filtered.filter(h => h.category === categoryNumber);
    }

    // Type assertion to match the state type
    setHurricanes(filtered as typeof hurricanes);

    // Adjust map view if there are hurricanes and we have a map reference
    if (filtered.length > 0 && mapRef.current) {
      const bounds = filtered.reduce((acc, hurricane) => {
        hurricane.path.forEach(point => {
          acc.extend([point[0], point[1]] as L.LatLngTuple);
        });
        return acc;
      }, L.latLngBounds(filtered[0].path[0] as L.LatLngTuple, filtered[0].path[0] as L.LatLngTuple));

      mapRef.current.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [category, status]);

  return (
    <MapContainer
      ref={mapRef}
      center={[25, -70]}
      zoom={4}
      style={{ height: '100%', width: '100%' }}
      className="dark-map" // For dark mode styling
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />

      {/* Add the ruler/measurement control */}
      <MapRulerControl
        position="topright"
        primaryLengthUnit="nautical-miles"
        secondaryLengthUnit="miles"
        primaryAreaUnit="sqmiles"
        secondaryAreaUnit="sqkilometers"
        theme="dark"
        customColors={{
          measureLine: "#5DADE2",
          measureArea: "#58D68D"
        }}
      />

      {hurricanes.map(hurricane => (
        <div key={hurricane.id}>
          {/* Hurricane Path */}
          <Polyline
            positions={hurricane.path}
            color={getCategoryColor(hurricane.category)}
            weight={2}
            opacity={0.7}
            dashArray="5, 5"
          />

          {/* Hurricane Position Marker */}
          <CircleMarker
            center={hurricane.currentPosition}
            radius={getCategoryRadius(hurricane.category)}
            fillColor={getCategoryColor(hurricane.category)}
            color="#fff"
            weight={1.5}
            fillOpacity={0.8}
          >
            <Popup>
              <div className="text-sm">
                <h3 className="font-bold">{hurricane.name}</h3>
                <p>Category: {hurricane.category}</p>
                <p>Wind Speed: {hurricane.windSpeed} mph</p>
                <p>Pressure: {hurricane.pressure} mb</p>
                <p>Movement: {hurricane.movementDirection} at {hurricane.movementSpeed} mph</p>
              </div>
            </Popup>
          </CircleMarker>

          {/* Path Points */}
          {hurricane.path.map((point, idx) => (
            <CircleMarker
              key={`${hurricane.id}-point-${idx}`}
              center={point}
              radius={2}
              fillColor={getCategoryColor(hurricane.category)}
              color="#fff"
              weight={1}
              fillOpacity={0.6}
            />
          ))}
        </div>
      ))}
    </MapContainer>
  );
}