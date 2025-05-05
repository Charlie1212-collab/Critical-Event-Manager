import React, { useState, useEffect } from "react";
import Card, { CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  MapPin,
  AlertTriangle,
  CloudLightning,
  ShieldAlert,
  PlusCircle,
  LogIn,
  Bell,
  Menu,
  X,
  Eye,
  Map,
  List,
  Settings,
  Filter
} from "lucide-react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import YouTubeSecurityFeed from "./YouTubeSecurityFeed";

// Define interfaces for our data types
interface Store {
  id: string;
  name: string;
  storeNumber: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  lat: number;
  lng: number;
}

interface Event {
  id: string | number;
  type: 'crime' | 'weather' | 'incident';
  storeId: string;
  title: string;
  severity: number;
  time: string;
}

interface CitizenIncident {
  title: string;
  address: string;
  latitude: number | string;
  longitude: number | string;
  timestamp_utc: string;
}

// Custom fallback icon for Leaflet
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const iconMap = {
  crime: <AlertTriangle className="text-red-500 inline-block mr-1" size={16} />,
  weather: <CloudLightning className="text-blue-500 inline-block mr-1" size={16} />,
  incident: <ShieldAlert className="text-orange-500 inline-block mr-1" size={16} />,
  citizen: <Bell className="text-purple-500 inline-block mr-1" size={16} />
};

export default function WalgreensCEMDashboard() {
  // State variables
  const [filter, setFilter] = useState({ crime: true, weather: true, incident: true, citizen: true });
  const [search, setSearch] = useState("");
  const [stores, setStores] = useState<Store[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [citizenIncidents, setCitizenIncidents] = useState<CitizenIncident[]>([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [newEvent, setNewEvent] = useState({ type: "crime", storeId: "", title: "", severity: 1 });

  // Client-side date states
  const [clientSideDate, setClientSideDate] = useState<Date | null>(null);
  const [lastUpdated, setLastUpdated] = useState('');

  // UI state management
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<'map' | 'events' | 'admin'>('map');
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  useEffect(() => {
    // Set client-side date values to prevent hydration mismatch
    setClientSideDate(new Date());
    setLastUpdated(new Date().toLocaleString());

    // Load stores
    fetch("http://localhost:8000/stores")
      .then(res => res.json())
      .then(data => {
        const validStores = data.filter((s: Store) => typeof s.lat === 'number' && typeof s.lng === 'number');
        setStores(validStores);
      });

    // Load events from backend
    const fetchEvents = () => {
      fetch("http://localhost:8000/events")
        .then(res => res.json())
        .then(setEvents);
    };

    // Load citizen incidents from the API endpoint
    fetch("/api/citizen-incidents")
      .then(res => res.json())
      .then(data => {
        // Filter out incidents with invalid coordinates
        const validIncidents = data.filter(
          (incident: CitizenIncident) =>
            incident.latitude &&
            incident.longitude &&
            incident.latitude !== "" &&
            incident.longitude !== ""
        );
        setCitizenIncidents(validIncidents);
      })
      .catch(err => console.error("Failed to load citizen incidents:", err));

    fetchEvents();
    const interval = setInterval(fetchEvents, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = async () => {
    const res = await fetch("http://localhost:8000/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(loginForm),
    });
    const data = await res.json();
    setToken(data.access_token);
  };

  const submitNewEvent = async () => {
    if (!newEvent.title || !newEvent.storeId) return alert("Fill in all fields");
    const fullEvent = {
      ...newEvent,
      id: Date.now(),
      time: clientSideDate ? clientSideDate.toLocaleString() : "Time pending...",
    };
    setLoading(true);
    await fetch("http://localhost:8000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(fullEvent),
    });
    setLoading(false);
  };

  const filteredEvents = events.filter(e => filter[e.type]);
  const filteredStores = stores.filter(s => s.name?.toLowerCase().includes(search.toLowerCase()));
  const filteredCitizenIncidents = filter.citizen ? citizenIncidents : [];

  // Create a citizen alert marker icon
  const citizenIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    className: 'citizen-marker', // Add a class for custom styling
  });

  // Filter panel component
  const FilterPanel = () => (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-white flex items-center">
          <Filter size={16} className="mr-2" /> Filters
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowFilterPanel(false)}
          className="text-gray-400 hover:text-white"
        >
          <X size={16} />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {Object.keys(filter).map(key => (
          <label key={key} className="flex items-center space-x-2 text-gray-300 p-2 border border-gray-700 rounded">
            <input
              type="checkbox"
              checked={filter[key as keyof typeof filter]}
              onChange={() => setFilter({ ...filter, [key as keyof typeof filter]: !filter[key as keyof typeof filter] })}
              className="accent-blue-500"
            />
            <span className="capitalize">{key === 'citizen' ? 'Citizen Alerts' : key}</span>
          </label>
        ))}
      </div>

      <div className="mt-3">
        <Input
          placeholder="Search store..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="bg-gray-700 text-white border-gray-600"
        />
      </div>
    </div>
  );

  // Stats summary
  const StatsSummary = () => {
    const crimesCount = events.filter(e => e.type === 'crime').length;
    const weatherCount = events.filter(e => e.type === 'weather').length;
    const incidentCount = events.filter(e => e.type === 'incident').length;
    const citizenCount = citizenIncidents.length;

    return (
      <div className="grid grid-cols-4 gap-3 mb-4">
        <Card className="bg-gradient-to-br from-red-900 to-red-800 border-none">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-red-300">Crime Reports</p>
                <p className="text-2xl font-bold">{crimesCount}</p>
              </div>
              <AlertTriangle className="text-red-400" size={28} />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-900 to-blue-800 border-none">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-blue-300">Weather Events</p>
                <p className="text-2xl font-bold">{weatherCount}</p>
              </div>
              <CloudLightning className="text-blue-400" size={28} />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-900 to-orange-800 border-none">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-orange-300">Incidents</p>
                <p className="text-2xl font-bold">{incidentCount}</p>
              </div>
              <ShieldAlert className="text-orange-400" size={28} />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900 to-purple-800 border-none">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-purple-300">Citizen Alerts</p>
                <p className="text-2xl font-bold">{citizenCount}</p>
              </div>
              <Bell className="text-purple-400" size={28} />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  // Sidebar component
  const Sidebar = () => {
    if (sidebarCollapsed) {
      return (
        <div className="h-full flex flex-col items-center py-4 bg-gray-900 w-16 border-r border-gray-800">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(false)}
            className="text-gray-400 hover:text-white mb-8"
          >
            <Menu size={20} />
          </Button>

          <div className="flex flex-col space-y-6 items-center">
            <Link href="/dashboard">
              <Button
                variant={activeTab === 'map' ? 'secondary' : 'ghost'}
                size="sm"
                className="w-10 h-10 p-0"
                onClick={() => setActiveTab('map')}
              >
                <Map size={18} />
              </Button>
            </Link>

            <Link href="/incidents">
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 p-0"
              >
                <List size={18} />
              </Button>
            </Link>

            <Link href="/weather-alerts">
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 p-0"
              >
                <CloudLightning size={18} />
              </Button>
            </Link>

            <Button
              variant={activeTab === 'admin' ? 'secondary' : 'ghost'}
              size="sm"
              className="w-10 h-10 p-0"
              onClick={() => setActiveTab('admin')}
            >
              <Settings size={18} />
            </Button>
          </div>
        </div>
      );
    }

    return (
      <aside className="w-64 bg-gray-900 p-4 space-y-4 overflow-y-auto h-full border-r border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">CEM Dashboard</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(true)}
            className="text-gray-400 hover:text-white"
          >
            <X size={16} />
          </Button>
        </div>

        <div className="flex flex-col space-y-2">
          <Button
            variant={activeTab === 'map' ? 'secondary' : 'ghost'}
            className="justify-start"
            onClick={() => setActiveTab('map')}
          >
            <Map size={16} className="mr-2" /> Map View
          </Button>

          <Link href="/incidents" className="w-full">
            <Button
              variant="ghost"
              className="justify-start w-full"
            >
              <List size={16} className="mr-2" /> Incidents
            </Button>
          </Link>

          <Link href="/weather-alerts" className="w-full">
            <Button
              variant="ghost"
              className="justify-start w-full"
            >
              <CloudLightning size={16} className="mr-2" /> Weather Alerts
            </Button>
          </Link>

          <Button
            variant={activeTab === 'admin' ? 'secondary' : 'ghost'}
            className="justify-start"
            onClick={() => setActiveTab('admin')}
          >
            <Settings size={16} className="mr-2" /> Admin Controls
          </Button>
        </div>

        <div className="pt-4 border-t border-gray-800">
          <h3 className="font-semibold text-white mb-2">Filters</h3>
          <div className="space-y-2">
            {Object.keys(filter).map(key => (
              <label key={key} className="flex items-center space-x-2 text-gray-300">
                <input
                  type="checkbox"
                  checked={filter[key as keyof typeof filter]}
                  onChange={() => setFilter({ ...filter, [key as keyof typeof filter]: !filter[key as keyof typeof filter] })}
                  className="accent-blue-500"
                />
                <span className="capitalize">{key === 'citizen' ? 'Citizen Alerts' : key}</span>
              </label>
            ))}
          </div>
          <Input
            placeholder="Search store..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-gray-800 text-white border-gray-700 mt-2"
          />
        </div>

        {token && (
          <div className="space-y-2 pt-4 border-t border-gray-800">
            <h3 className="font-semibold text-white">Quick Actions</h3>
            <Button onClick={() => setActiveTab('admin')} size="sm" className="w-full">
              <PlusCircle className="mr-2" size={16} /> New Event
            </Button>
          </div>
        )}

        {!token && (
          <div className="space-y-2 pt-4 border-t border-gray-800">
            <Button onClick={() => setActiveTab('admin')} size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
              <LogIn size={16} className="mr-2" /> Admin Login
            </Button>
          </div>
        )}

        <Link href="/" className="block w-full pt-4 border-t border-gray-800">
          <Button variant="outline" size="sm" className="w-full">
            Back to Home
          </Button>
        </Link>

        <div className="pt-4 border-t border-gray-800 mt-auto">
          <p className="text-xs text-gray-500 mb-1">Last updated: {lastUpdated}</p>
          <p className="text-xs text-gray-400">Walgreens CEM Dashboard v1.2</p>
        </div>
      </aside>
    );
  };

  // Map component
  const MapView = () => (
    <div className="flex-1 h-full flex flex-col">
      <div className="flex-1 rounded-xl overflow-hidden">
        <MapContainer center={[39.8283, -98.5795]} zoom={4} className="h-full w-full">
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
          {/* Store markers */}
          {filteredStores.map(store => (
            store.lat !== undefined && store.lng !== undefined ? (
              <Marker key={store.id} position={[store.lat, store.lng]} icon={customIcon}>
                <Popup className="store-popup">
                  <div className="mb-3 pb-2 border-b border-gray-300">
                    <strong className="text-lg font-bold block">{store.name}</strong>
                    <p className="text-sm">Store #{store.storeNumber}</p>
                    <p className="text-sm">{store.address}, {store.city}, {store.state} {store.zipCode}</p>
                    <p className="text-sm">Phone: {store.phone}</p>
                  </div>

                  {filteredEvents.filter(e => e.storeId === store.id).length > 0 ? (
                    <>
                      <h4 className="font-medium mb-1">Current Events:</h4>
                      <ul className="mt-1 space-y-1">
                        {filteredEvents.filter(e => e.storeId === store.id).map(ev => (
                          <li key={ev.id} className="text-sm flex items-center">
                            {iconMap[ev.type]} <span className="ml-1">{ev.title}</span>
                            <span className="ml-auto text-xs px-1.5 py-0.5 rounded-full" style={{
                              backgroundColor: ev.severity === 1 ? '#4ade80' : ev.severity === 2 ? '#facc15' : '#ef4444',
                              color: ev.severity === 1 ? '#052e16' : ev.severity === 2 ? '#422006' : '#fff'
                            }}>
                              {ev.severity === 1 ? 'Low' : ev.severity === 2 ? 'Medium' : 'High'}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className="text-sm text-gray-500">No active events at this location</p>
                  )}
                </Popup>
              </Marker>
            ) : null
          ))}

          {/* Citizen incident markers */}
          {filteredCitizenIncidents.map((incident, idx) => {
            const lat = parseFloat(incident.latitude.toString());
            const lng = parseFloat(incident.longitude.toString());

            if (isNaN(lat) || isNaN(lng)) return null;

            return (
              <Marker
                key={`citizen-${idx}`}
                position={[lat, lng]}
                icon={citizenIcon}
              >
                <Popup>
                  <strong className="text-purple-600">Citizen Alert</strong>
                  <p className="font-medium">{incident.title}</p>
                  <p className="text-sm">{incident.address}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(incident.timestamp_utc).toLocaleString()}
                  </p>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );

  // Events list component
  const EventsList = () => (
    <div className="flex-1 overflow-y-auto space-y-4">
      {/* Event type tabs */}
      <div className="flex space-x-2 mb-2">
        <Button
          variant={filter.crime ? "default" : "outline"}
          size="sm"
          className={filter.crime ? "bg-red-700 hover:bg-red-800" : "text-red-500 border-red-500"}
          onClick={() => setFilter({ ...filter, crime: !filter.crime })}
        >
          <AlertTriangle size={16} className="mr-1" /> Crimes
        </Button>
        <Button
          variant={filter.weather ? "default" : "outline"}
          size="sm"
          className={filter.weather ? "bg-blue-700 hover:bg-blue-800" : "text-blue-500 border-blue-500"}
          onClick={() => setFilter({ ...filter, weather: !filter.weather })}
        >
          <CloudLightning size={16} className="mr-1" /> Weather
        </Button>
        <Button
          variant={filter.incident ? "default" : "outline"}
          size="sm"
          className={filter.incident ? "bg-orange-700 hover:bg-orange-800" : "text-orange-500 border-orange-500"}
          onClick={() => setFilter({ ...filter, incident: !filter.incident })}
        >
          <ShieldAlert size={16} className="mr-1" /> Incidents
        </Button>
        <Button
          variant={filter.citizen ? "default" : "outline"}
          size="sm"
          className={filter.citizen ? "bg-purple-700 hover:bg-purple-800" : "text-purple-500 border-purple-500"}
          onClick={() => setFilter({ ...filter, citizen: !filter.citizen })}
        >
          <Bell size={16} className="mr-1" /> Citizen
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Regular events */}
        {filteredEvents.map(event => {
          const store = stores.find(s => s.id === event.storeId);
          return (
            <Card
              key={event.id}
              className={`border-l-4 bg-gray-700 ${
                event.type === 'crime'
                  ? 'border-red-500'
                  : event.type === 'weather'
                  ? 'border-blue-500'
                  : 'border-orange-500'
              }`}
            >
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {iconMap[event.type]}
                    <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full" style={{
                    backgroundColor: event.severity === 1 ? '#2f2' : event.severity === 2 ? '#ff2' : '#f22',
                    color: event.severity === 1 ? '#000' : event.severity === 2 ? '#000' : '#fff'
                  }}>
                    Level {event.severity}
                  </span>
                </div>
                <div className="text-sm">
                  <p className="text-gray-300 font-medium">{store?.name}</p>
                  {store && (
                    <p className="text-gray-400">
                      {store.address}, {store.city}, {store.state} {store.zipCode}
                    </p>
                  )}
                </div>
                <p className="text-sm text-gray-400">{event.time}</p>
                <div className="flex justify-between items-center">
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:bg-gray-600">
                    <Eye size={14} className="mr-1" /> Details
                  </Button>
                  <Button variant="outline" size="sm" className="text-gray-300 border-gray-600 hover:bg-gray-600">
                    Acknowledge
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* Citizen incidents */}
        {filter.citizen && citizenIncidents.map((incident, idx) => {
          // Only show incidents with valid coordinates
          const lat = parseFloat(incident.latitude.toString());
          const lng = parseFloat(incident.longitude.toString());
          if (isNaN(lat) || isNaN(lng)) return null;

          return (
            <Card
              key={`citizen-card-${idx}`}
              className="border-l-4 border-purple-500 bg-gray-700"
            >
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {iconMap.citizen}
                    <h3 className="text-lg font-semibold text-white">{incident.title}</h3>
                  </div>
                  <span className="text-xs text-purple-300 px-2 py-1 bg-purple-900/50 rounded-full">
                    Citizen
                  </span>
                </div>
                <p className="text-sm text-gray-300">{incident.address}</p>
                <p className="text-sm text-gray-400">
                  {incident.timestamp_utc
                    ? new Date(incident.timestamp_utc).toLocaleString()
                    : "Date unknown"}
                </p>
                <div className="flex justify-between items-center">
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:bg-gray-600">
                    <MapPin size={14} className="mr-1" /> Map
                  </Button>
                  <Button variant="outline" size="sm" className="text-gray-300 border-gray-600 hover:bg-gray-600">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  // Admin panel component
  const AdminPanel = () => (
    <div className="flex-1 overflow-y-auto">
      {!token ? (
        <Card className="bg-gray-800 border border-gray-700 mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Admin Login</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Username</label>
                <Input
                  placeholder="Enter username"
                  value={loginForm.username}
                  onChange={e => setLoginForm({ ...loginForm, username: e.target.value })}
                  className="bg-gray-700 text-white border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                <Input
                  placeholder="Enter password"
                  type="password"
                  value={loginForm.password}
                  onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="bg-gray-700 text-white border-gray-600"
                />
              </div>
              <Button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700">
                <LogIn size={16} className="mr-2" /> Login
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card className="bg-gray-800 border border-gray-700">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Create New Event</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Event Type</label>
                    <select
                      className="w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
                      value={newEvent.type}
                      onChange={e => setNewEvent({ ...newEvent, type: e.target.value })}
                    >
                      <option value="crime">Crime</option>
                      <option value="weather">Weather</option>
                      <option value="incident">Incident</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Severity</label>
                    <select
                      className="w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
                      value={newEvent.severity}
                      onChange={e => setNewEvent({ ...newEvent, severity: parseInt(e.target.value) })}
                    >
                      <option value="1">Low (1)</option>
                      <option value="2">Medium (2)</option>
                      <option value="3">High (3)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Store Location</label>
                  <select
                    className="w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
                    value={newEvent.storeId}
                    onChange={e => setNewEvent({ ...newEvent, storeId: e.target.value })}
                  >
                    <option value="">Select Store</option>
                    {stores.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Event Title</label>
                  <Input
                    placeholder="Enter event description"
                    value={newEvent.title}
                    onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>

                <Button
                  onClick={submitNewEvent}
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {loading ? "Creating..." : "Create Event"}
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 pt-4 border-t border-gray-700">
            <YouTubeSecurityFeed />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Walgreens Critical Event Manager</h1>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilterPanel(!showFilterPanel)}
                className="text-gray-300 hover:text-white"
              >
                <Filter size={16} className="mr-1" /> Filters
              </Button>

              {token && (
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-400 border-blue-600"
                  onClick={() => setToken("")}
                >
                  Logout
                </Button>
              )}
            </div>
          </div>

          {showFilterPanel && <FilterPanel />}

          <StatsSummary />
        </header>

        {/* Content */}
        <div className="flex-1 p-4 overflow-hidden">
          {activeTab === 'map' && <MapView />}
          {activeTab === 'events' && <EventsList />}
          {activeTab === 'admin' && <AdminPanel />}
        </div>
      </div>
    </div>
  );
}