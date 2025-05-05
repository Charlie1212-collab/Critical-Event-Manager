import React from 'react';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import axios from 'axios';

// Dynamically import react-leaflet components with no SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const CircleMarker = dynamic(
  () => import('react-leaflet').then((mod) => mod.CircleMarker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);
const Polyline = dynamic(
  () => import('react-leaflet').then((mod) => mod.Polyline),
  { ssr: false }
);

// Import MapRulerControl component with dynamic import to avoid SSR issues
const MapRulerControl = dynamic(
  () => import('./ui/MapRulerControl'),
  { ssr: false }
);

// Event type filter configuration
type ActiveEventTypes = {
  incidents?: boolean;
  wildfires?: boolean;
  hurricanes?: boolean;
  weather?: boolean;
  crime?: boolean;
};

// Incident type definition
type Incident = {
  id: number | string;
  type: string;
  title: string;
  location: [number, number];
  severity: number;
  time: string;
  address?: string;
  details?: string;
  link?: string;
};

// Hurricane type definition
type Hurricane = {
  id: string;
  name: string;
  category: number;
  currentPosition: [number, number];
  path: [number, number][];
  windSpeed: number;
  pressure: number;
  movementDirection: string;
  movementSpeed: number;
};

// Wildfire type definition
type WildfireIncident = {
  title: string;
  link: string;
  description: string;
  published: string;
  creator: string;
  guid: string;
  coordinates?: [number, number];
  state?: string;
  location?: string;
};

// Mock incident data - in a real app this would come from your API
const mockIncidents: Incident[] = [
  {
    id: 1,
    type: 'crime',
    title: 'Robbery at Store #1234',
    location: [41.8781, -87.6298], // Chicago
    severity: 3,
    time: 'Today, 10:30 AM'
  },
  {
    id: 2,
    type: 'weather',
    title: 'Severe Flooding',
    location: [29.7604, -95.3698], // Houston
    severity: 2,
    time: 'Today, 9:15 AM'
  },
  {
    id: 3,
    type: 'incident',
    title: 'Power Outage',
    location: [34.0522, -118.2437], // Los Angeles
    severity: 3,
    time: 'Today, 8:45 AM'
  },
  {
    id: 4,
    type: 'crime',
    title: 'Shoplifting Incident',
    location: [40.7128, -74.0060], // New York
    severity: 1,
    time: 'Today, 11:20 AM'
  },
  {
    id: 5,
    type: 'weather',
    title: 'Tornado Warning',
    location: [39.7392, -104.9903], // Denver
    severity: 3,
    time: 'Today, 7:30 AM'
  }
];

// Mock hurricane data
const mockHurricaneData = {
  active: [
    {
      id: 'h1',
      name: 'Hurricane Everett',
      category: 3,
      currentPosition: [24.5, -75.8] as [number, number],
      path: [
        [22.1, -79.3] as [number, number],
        [23.2, -77.5] as [number, number],
        [24.5, -75.8] as [number, number],
        [25.9, -74.2] as [number, number],
        [27.6, -72.8] as [number, number]
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
      currentPosition: [16.2, -63.5] as [number, number],
      path: [
        [15.0, -67.2] as [number, number],
        [15.5, -65.4] as [number, number],
        [16.2, -63.5] as [number, number],
        [16.8, -61.7] as [number, number],
        [17.5, -59.8] as [number, number]
      ],
      windSpeed: 96,
      pressure: 978,
      movementDirection: 'NE',
      movementSpeed: 8
    }
  ]
};

// Get color based on incident type and severity
const getIncidentColor = (type: string, severity: number): string => {
  if (type === 'crime') {
    return severity === 3 ? '#e74c3c' : severity === 2 ? '#e67e22' : '#f39c12';
  } else if (type === 'weather') {
    return severity === 3 ? '#3498db' : severity === 2 ? '#2980b9' : '#1abc9c';
  } else if (type === 'citizen') {
    return severity === 3 ? '#ff5722' : severity === 2 ? '#ff9800' : '#ffc107'; // Orange hues for Citizen alerts
  } else if (type === 'wildfire') {
    return severity === 3 ? '#d32f2f' : severity === 2 ? '#f44336' : '#ff5722'; // Red hues for wildfire incidents
  } else {
    return severity === 3 ? '#9b59b6' : severity === 2 ? '#8e44ad' : '#2c3e50';
  }
};

// Function to get color based on hurricane category
const getHurricaneColor = (category: number) => {
  switch (category) {
    case 1: return '#5DADE2'; // Blue
    case 2: return '#58D68D'; // Green
    case 3: return '#F4D03F'; // Yellow
    case 4: return '#E67E22'; // Orange
    case 5: return '#E74C3C'; // Red
    default: return '#85929E'; // Gray for tropical storms/depressions
  }
};

// Function to determine severity based on incident title
const getSeverity = (title: string): number => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('robbery') ||
    lowerTitle.includes('fire') ||
    lowerTitle.includes('assault') ||
    lowerTitle.includes('battery')) {
    return 3; // High severity
  } else if (lowerTitle.includes('theft') ||
    lowerTitle.includes('shoplifting') ||
    lowerTitle.includes('harass')) {
    return 2; // Medium severity
  } else {
    return 1; // Low severity
  }
};

// Function to format UTC timestamp to local time
const formatTime = (timestamp: string): string => {
  if (!timestamp) return 'Recent';
  const date = new Date(timestamp);
  return date.toLocaleString([], {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Function to strip HTML tags from description
const stripHtmlTags = (html: string) => {
  return html.replace(/<[^>]*>?/gm, '');
};

// Function to extract brief description from wildfire incident
const extractWildfireDescription = (description: string): string => {
  const overviewRegex = /Incident Overview:(.+?)(?=---|$)/s;
  const match = description.match(overviewRegex);
  return match ? match[1].trim() : description.substring(0, 150) + '...';
};

interface LiveIncidentMapProps {
  activeEventTypes?: ActiveEventTypes;
}

export default function LiveIncidentMap({ activeEventTypes = {
  incidents: true,
  wildfires: true,
  hurricanes: true,
  weather: true,
  crime: true
} }: LiveIncidentMapProps) {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [hurricanes, setHurricanes] = useState<Hurricane[]>([]);
  const [mapReady, setMapReady] = useState(false);
  const [filteredIncidents, setFilteredIncidents] = useState<Incident[]>([]);
  const [filteredHurricanes, setFilteredHurricanes] = useState<Hurricane[]>([]);

  // Fetch all data when the component mounts
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // Start with mock incidents
        let allIncidents: Incident[] = [...mockIncidents];

        // Fetch citizen incidents
        try {
          const citizenResponse = await fetch('/api/citizen-incidents');
          if (citizenResponse.ok) {
            const citizenData = await citizenResponse.json();
            // Convert citizen data to map format
            const citizenIncidents: Incident[] = citizenData
              .filter((item: any) => item.latitude && item.longitude)
              .map((item: any, index: number) => ({
                id: `citizen-${1000 + index}`,
                type: 'citizen',
                title: item.title,
                location: [parseFloat(item.latitude), parseFloat(item.longitude)],
                severity: getSeverity(item.title),
                time: formatTime(item.timestamp_utc),
                address: item.address
              }));
            allIncidents = [...allIncidents, ...citizenIncidents];
          }
        } catch (err) {
          console.error('Error fetching citizen incidents:', err);
        }

        // Fetch wildfire incidents
        try {
          const wildfireResponse = await axios.get<WildfireIncident[]>('/api/inciweb-incidents');
          if (wildfireResponse.data && wildfireResponse.data.length > 0) {
            const wildfireIncidents: Incident[] = wildfireResponse.data
              .filter(item => item.coordinates) // Only include incidents with valid coordinates
              .map(item => ({
                id: `wildfire-${item.guid}`,
                type: 'wildfire',
                title: item.title,
                location: item.coordinates as [number, number],
                severity: 3, // Most wildfires are high severity
                time: formatTime(item.published),
                address: item.location || 'Location unknown',
                details: extractWildfireDescription(item.description),
                link: item.link
              }));
            allIncidents = [...allIncidents, ...wildfireIncidents];
          }
        } catch (err) {
          console.error('Error fetching wildfire incidents:', err);
        }

        // Set the hurricanes from mock data (in a real app, fetch from API)
        setHurricanes(mockHurricaneData.active);

        // Update state with all incidents
        setIncidents(allIncidents);
        setMapReady(true);
      } catch (error) {
        console.error('Error fetching incidents:', error);
        setIncidents(mockIncidents);
        setMapReady(true);
      }
    };

    fetchAllData();
  }, []);

  // Apply filters whenever incidents, hurricanes, or activeEventTypes change
  useEffect(() => {
    // Filter incidents based on activeEventTypes
    const newFilteredIncidents = incidents.filter(incident => {
      // Handle crime incidents
      if (incident.type === 'crime' && activeEventTypes.crime === false) {
        return false;
      }

      // Handle weather incidents
      if (incident.type === 'weather' && activeEventTypes.weather === false) {
        return false;
      }

      // Handle wildfire incidents
      if (incident.type === 'wildfire' && activeEventTypes.wildfires === false) {
        return false;
      }

      // Handle general incidents (not specifically categorized)
      if (incident.type !== 'crime' &&
        incident.type !== 'weather' &&
        incident.type !== 'wildfire' &&
        activeEventTypes.incidents === false) {
        return false;
      }

      return true;
    });

    setFilteredIncidents(newFilteredIncidents);

    // Filter hurricanes
    setFilteredHurricanes(activeEventTypes.hurricanes ? hurricanes : []);

  }, [incidents, hurricanes, activeEventTypes]);

  if (!mapReady) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-dark-200">
        <div className="text-white text-lg">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <MapContainer
        center={[39.8283, -98.5795]}
        zoom={4}
        style={{ height: '100%', width: '100%', minHeight: '400px' }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {/* Add the ruler control to the map */}
        <MapRulerControl
          position="topright"
          primaryLengthUnit="miles"
          secondaryLengthUnit="kilometers"
          activeColor="#ff6b6b"
          completedColor="#ff9f43"
        />

        {/* Regular Incidents */}
        {filteredIncidents.map(incident => (
          <CircleMarker
            key={incident.id}
            center={incident.location}
            radius={10 + (incident.severity * 2)}
            fillColor={getIncidentColor(incident.type, incident.severity)}
            color="#fff"
            weight={1}
            fillOpacity={0.8}
          >
            <Popup>
              <div className="text-sm text-gray-800">
                <h3 className="font-bold">{incident.title}</h3>
                <p className="capitalize">Type: {incident.type}</p>
                {incident.address && <p>Location: {incident.address}</p>}
                {incident.details && <p>{incident.details}</p>}
                <p>Severity: {incident.severity}</p>
                <p>Reported: {incident.time}</p>
                {incident.type === 'citizen' && (
                  <a
                    href="https://citizen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 text-center text-sm py-1 bg-orange-500 hover:bg-orange-600 text-white rounded"
                  >
                    View on Citizen
                  </a>
                )}
                {incident.type === 'wildfire' && incident.link && (
                  <a
                    href={incident.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 text-center text-sm py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                  >
                    View on InciWeb
                  </a>
                )}
              </div>
            </Popup>
          </CircleMarker>
        ))}

        {/* Hurricane Data */}
        {filteredHurricanes.map(hurricane => (
          <div key={hurricane.id}>
            {/* Hurricane Path */}
            <Polyline
              positions={hurricane.path}
              color={getHurricaneColor(hurricane.category)}
              weight={2}
              opacity={0.7}
              dashArray="5, 5"
            />

            {/* Hurricane Position Marker */}
            <CircleMarker
              center={hurricane.currentPosition}
              radius={10 + (hurricane.category * 2)}
              fillColor={getHurricaneColor(hurricane.category)}
              color="#fff"
              weight={1.5}
              fillOpacity={0.8}
            >
              <Popup>
                <div className="text-sm text-gray-800">
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
                fillColor={getHurricaneColor(hurricane.category)}
                color="#fff"
                weight={1}
                fillOpacity={0.6}
              />
            ))}
          </div>
        ))}
      </MapContainer>
    </div>
  );
}