import React, { useState, useEffect, useCallback } from 'react';
import CardContent from './ui/card';
import { Card } from './ui/card';
import { AlertTriangle, CloudLightning, ShieldAlert, Clock, AlertOctagon, ExternalLink, RefreshCw } from 'lucide-react';

// Extended incident type to include citizens alerts
type Incident = {
  id: number;
  type: 'crime' | 'weather' | 'incident' | 'citizen';
  title: string;
  location: string;
  severity: number;
  time: string;
  details: string;
};

// Sample incident data
const sampleIncidents: Incident[] = [
  {
    id: 1,
    type: 'crime',
    title: 'Robbery at Store #1234',
    location: 'Chicago Downtown',
    severity: 3,
    time: '10:30 AM',
    details: 'Armed robbery reported at the pharmacy counter. Police have been notified and are on scene.'
  },
  {
    id: 2,
    type: 'weather',
    title: 'Severe Flooding Warning',
    location: 'Houston Area Stores',
    severity: 2,
    time: '9:15 AM',
    details: 'Flash flood warnings issued for the greater Houston area. Several store locations may be affected.'
  },
  {
    id: 3,
    type: 'incident',
    title: 'Power Outage',
    location: 'Los Angeles Beverly Hills',
    severity: 3,
    time: '8:45 AM',
    details: 'Store running on backup generators. Estimated resolution time: 4 hours.'
  },
  {
    id: 4,
    type: 'crime',
    title: 'Shoplifting Incident',
    location: 'New York Times Square',
    severity: 1,
    time: '11:20 AM',
    details: 'Minor shoplifting incident reported. Security handling the situation.'
  },
  {
    id: 5,
    type: 'weather',
    title: 'Tornado Warning',
    location: 'Denver Central',
    severity: 3,
    time: '7:30 AM',
    details: 'NOAA has issued tornado warnings. Store has activated emergency protocols.'
  }
];

const typeIcons: { [key: string]: React.ReactNode } = {
  crime: <AlertTriangle className="text-red-500" />,
  weather: <CloudLightning className="text-blue-500" />,
  incident: <ShieldAlert className="text-purple-500" />,
  citizen: <AlertOctagon className="text-orange-500" />
};

const severityColors: { [key: number]: string } = {
  1: 'border-yellow-500',
  2: 'border-orange-500',
  3: 'border-red-600'
};

// Function to format UTC timestamp to local time
const formatTime = (timestamp: string): string => {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// Function to determine severity based on incident type
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

export default function IncidentPanel() {
  const [incidents, setIncidents] = useState<Incident[]>(sampleIncidents);
  const [selectedIncident, setSelectedIncident] = useState<Incident>(sampleIncidents[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [autoRefresh, setAutoRefresh] = useState<boolean>(true);
  const [refreshInterval, setRefreshInterval] = useState<number>(60); // seconds

  // Define fetchCitizenIncidents as a useCallback to prevent unnecessary recreations
  const fetchCitizenIncidents = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/citizen-incidents');

      if (!response.ok) {
        throw new Error('Failed to fetch citizen incidents');
      }

      const data = await response.json();

      // Map citizen incidents to our format with explicit type safety
      const citizenIncidents: Incident[] = data.map((item: any, index: number) => ({
        id: 1000 + index,
        type: 'citizen' as const,
        title: item.title,
        location: item.address?.split(',')[0] || 'Unknown', // Handle potential undefined address
        severity: getSeverity(item.title),
        time: formatTime(item.timestamp_utc) || 'Recent',
        details: `Citizen alert reported at ${item.address || 'unknown location'}. ${item.title}.`
      }));

      // Combine with existing incidents, but preserve sample incidents
      setIncidents([...citizenIncidents.slice(0, 10), ...sampleIncidents]);

      // Update the last updated timestamp
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (error) {
      console.error('Error fetching citizen incidents:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial fetch when component mounts
  useEffect(() => {
    fetchCitizenIncidents();
  }, [fetchCitizenIncidents]);

  // Set up automatic refresh interval
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (autoRefresh) {
      intervalId = setInterval(() => {
        fetchCitizenIncidents();
      }, refreshInterval * 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoRefresh, refreshInterval, fetchCitizenIncidents]);

  // Function to handle viewing detailed incident information
  const handleViewDetails = () => {
    setShowDetailedView(true);
  };

  // Function to go back from the detailed view
  const handleBackToList = () => {
    setShowDetailedView(false);
  };

  // Function to toggle auto-refresh
  const toggleAutoRefresh = () => {
    setAutoRefresh(prev => !prev);
  };

  // Function to manually refresh incidents
  const handleManualRefresh = () => {
    fetchCitizenIncidents();
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden flex flex-col h-[400px]">
      <div className="p-4 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">
            {showDetailedView ? (
              <div className="flex items-center">
                <button
                  onClick={handleBackToList}
                  className="mr-2 text-sm bg-gray-700 hover:bg-gray-600 py-1 px-2 rounded"
                >
                  ← Back
                </button>
                Incident Details
              </div>
            ) : "Recent Incidents"}
          </h3>

          {!showDetailedView && (
            <div className="flex items-center gap-2">
              {isLoading ? (
                <span className="text-xs text-gray-400">Updating...</span>
              ) : lastUpdated && (
                <span className="text-xs text-gray-400">Last updated: {lastUpdated}</span>
              )}

              <button
                onClick={handleManualRefresh}
                disabled={isLoading}
                className="p-1 rounded hover:bg-gray-700 disabled:opacity-50"
                title="Refresh incidents"
              >
                <RefreshCw size={16} className={`text-blue-400 ${isLoading ? 'animate-spin' : ''}`} />
              </button>

              <button
                onClick={toggleAutoRefresh}
                className={`text-xs px-2 py-1 rounded ${autoRefresh ? 'bg-blue-600' : 'bg-gray-700'}`}
                title={autoRefresh ? "Disable auto-refresh" : "Enable auto-refresh"}
              >
                {autoRefresh ? 'Auto' : 'Manual'}
              </button>
            </div>
          )}
        </div>
      </div>

      {!showDetailedView ? (
        // Regular view with list and preview
        <div className="flex flex-1 overflow-hidden">
          {/* Incident list */}
          <div className="w-1/2 overflow-y-auto border-r border-gray-700">
            {incidents.map(incident => (
              <div
                key={incident.id}
                className={`p-3 border-l-4 ${severityColors[incident.severity]} cursor-pointer hover:bg-gray-700 transition ${selectedIncident?.id === incident.id ? 'bg-gray-700' : ''
                  }`}
                onClick={() => setSelectedIncident(incident)}
              >
                <div className="flex items-center gap-2">
                  {typeIcons[incident.type]}
                  <h4 className="font-medium text-sm">{incident.title}</h4>
                </div>
                <div className="flex items-center justify-between mt-1 text-xs">
                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock size={12} />
                    <span>{incident.time}</span>
                  </div>
                  {incident.type === 'citizen' && (
                    <span className="bg-orange-800/40 text-orange-300 px-1.5 py-0.5 rounded text-xs">Citizen</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Incident preview */}
          <div className="w-1/2 p-4 overflow-y-auto">
            {selectedIncident ? (
              <>
                <div className="flex items-center gap-2 mb-3">
                  {typeIcons[selectedIncident.type]}
                  <h3 className="font-bold">{selectedIncident.title}</h3>
                </div>

                <div className="space-y-2 text-sm">
                  <p><span className="text-gray-400">Location:</span> {selectedIncident.location}</p>
                  <p><span className="text-gray-400">Time:</span> {selectedIncident.time}</p>
                  <p><span className="text-gray-400">Severity:</span> {selectedIncident.severity}</p>
                  <p className="mt-4 line-clamp-3">{selectedIncident.details}</p>
                </div>

                <div className="mt-6 space-y-2">
                  <button
                    className="w-full py-1.5 bg-blue-600 hover:bg-blue-700 rounded text-sm transition flex items-center justify-center gap-1"
                    onClick={handleViewDetails}
                  >
                    View Details <ExternalLink size={14} />
                  </button>
                  <button className="w-full py-1.5 bg-transparent border border-gray-600 hover:bg-gray-700 rounded text-sm transition">
                    View on Map
                  </button>
                  {selectedIncident.type === 'citizen' && (
                    <a
                      href="https://citizen.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-1.5 bg-orange-700 hover:bg-orange-800 rounded text-sm transition"
                    >
                      View on Citizen
                    </a>
                  )}
                </div>
              </>
            ) : (
              <p className="text-gray-400 text-center mt-8">Select an incident to view details</p>
            )}
          </div>
        </div>
      ) : (
        // Detailed view
        <div className="p-5 overflow-y-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-3 rounded-full ${selectedIncident.type === 'crime' ? 'bg-red-500/20' :
              selectedIncident.type === 'weather' ? 'bg-blue-500/20' :
                selectedIncident.type === 'citizen' ? 'bg-orange-500/20' : 'bg-purple-500/20'
              }`}>
              {typeIcons[selectedIncident.type]}
            </div>
            <div>
              <h2 className="text-xl font-bold">{selectedIncident.title}</h2>
              <p className="text-sm text-gray-400">
                {selectedIncident.location} • {selectedIncident.time}
              </p>
            </div>
          </div>

          <div className="space-y-4 my-6">
            <div className="p-4 bg-gray-700/50 rounded">
              <h3 className="text-gray-300 font-medium mb-2">Incident Details</h3>
              <p>{selectedIncident.details}</p>
            </div>

            <div className="p-4 bg-gray-700/50 rounded">
              <h3 className="text-gray-300 font-medium mb-2">Severity Assessment</h3>
              <div className="flex items-center gap-2">
                <div className={`h-3 rounded-full ${selectedIncident.severity === 3 ? 'bg-red-600 w-3/4' :
                  selectedIncident.severity === 2 ? 'bg-orange-500 w-1/2' : 'bg-yellow-500 w-1/4'
                  }`}></div>
                <span className="text-sm">{
                  selectedIncident.severity === 3 ? 'High' :
                    selectedIncident.severity === 2 ? 'Medium' : 'Low'
                }</span>
              </div>
            </div>

            {selectedIncident.type === 'crime' && (
              <div className="p-4 bg-gray-700/50 rounded">
                <h3 className="text-gray-300 font-medium mb-2">Law Enforcement Status</h3>
                <p className="text-sm">Police have been notified and are responding to the incident.</p>
              </div>
            )}

            {selectedIncident.type === 'weather' && (
              <div className="p-4 bg-gray-700/50 rounded">
                <h3 className="text-gray-300 font-medium mb-2">Weather Advisory</h3>
                <p className="text-sm">This is an official weather alert. Store managers should follow established weather protocols.</p>
              </div>
            )}

            {selectedIncident.type === 'citizen' && (
              <div className="p-4 bg-gray-700/50 rounded">
                <h3 className="text-gray-300 font-medium mb-2">Citizen Report</h3>
                <p className="text-sm">This incident was reported through the Citizen app by community members.</p>
                <a
                  href="https://citizen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-orange-400 hover:text-orange-300 mt-2"
                >
                  View on Citizen <ExternalLink size={12} />
                </a>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
              Acknowledge Incident
            </button>
            <button className="flex-1 py-2 bg-transparent border border-gray-600 hover:bg-gray-700 rounded text-sm transition">
              Forward to Team
            </button>
          </div>
        </div>
      )}
    </div>
  );
}