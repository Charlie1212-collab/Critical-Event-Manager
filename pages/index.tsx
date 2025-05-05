import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  AlertTriangle,
  CloudLightning,
  Clock,
  ShieldAlert
} from "lucide-react";
import MainLayout from "../components/MainLayout";
import ErrorHandlingImage from "../components/ui/ErrorHandlingImage";

const IncidentPanel = dynamic(() => import("../components/IncidentPanel"), { ssr: false });
const LiveIncidentMap = dynamic(() => import("../components/LiveIncidentMap"), { ssr: false });
const HurricaneMap = dynamic(() => import("../components/HurricaneMap"), { ssr: false });
const RealTimeWeatherMonitor = dynamic(() => import("../components/RealTimeWeatherMonitor"), { ssr: false });
const WeatherAlertMonitor = dynamic(() => import("../components/WeatherAlertMonitor"), { ssr: false });

export default function Home() {
  // Client-side state for date values to prevent hydration mismatch
  const [currentTime, setCurrentTime] = useState('');
  const [systemCheckTime, setSystemCheckTime] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  const [backgroundImageError, setBackgroundImageError] = useState(false);
  const backgroundImagePath = '/assets/backgroundImage.jpg';
  const fallbackImagePath = '/assets/placeholder.png';

  // Update date values only on the client side
  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
    setSystemCheckTime(new Date().toLocaleTimeString());
    setCurrentYear(new Date().getFullYear().toString());

    // Force background image loading with correct path
    const img = new Image();
    img.src = backgroundImagePath;
    img.onerror = () => {
      console.error(`Error loading background image: ${backgroundImagePath}`);
      setBackgroundImageError(true);
    };
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>Critical Event Management Dashboard</title>
      </Head>

      {/* Background overlay with error handling */}
      <div
        className="fixed inset-0 bg-cover bg-center z-[-2]"
        style={{
          backgroundImage: `url('${backgroundImageError ? fallbackImagePath : backgroundImagePath}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: backgroundImageError ? "#121212" : "transparent" // Add a fallback color
        }}
      />
      <div className="fixed inset-0 bg-black/80 z-[-1]"></div>

      {/* Hidden image preloader with error handling */}
      <div className="hidden">
        <ErrorHandlingImage
          src={backgroundImagePath}
          alt="Background"
          fallbackSrc={fallbackImagePath}
          onError={(error) => {
            console.error("Background image failed to load:", error);
            setBackgroundImageError(true);
          }}
        />
      </div>

      {/* Main content */}
      <div className="p-6 overflow-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-1">Overview</h2>
          <p className="text-dark-700">Current active events and critical incidents</p>
        </div>

        {/* Status cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <Link href="/incidents" className="card-gradient p-5 rounded-xl border border-dark-300/30 shadow-card transition-all hover:translate-y-[-5px] hover:shadow-lg cursor-pointer">
            <div className="flex justify-between">
              <div>
                <p className="text-dark-700 text-sm">Critical Incidents</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-crime/10 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-crime" />
              </div>
            </div>
            <div className="mt-3 text-dark-700 text-sm">
              +3 since yesterday
            </div>
          </Link>

          <Link href="/weather-alerts" className="card-gradient p-5 rounded-xl border border-dark-300/30 shadow-card transition-all hover:translate-y-[-5px] hover:shadow-lg cursor-pointer">
            <div className="flex justify-between">
              <div>
                <p className="text-dark-700 text-sm">Weather Alerts</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-weather/10 flex items-center justify-center">
                <CloudLightning className="h-6 w-6 text-weather" />
              </div>
            </div>
            <div className="mt-3 text-dark-700 text-sm">
              +1 since yesterday
            </div>
          </Link>

          <Link href="/incidents?type=store" className="card-gradient p-5 rounded-xl border border-dark-300/30 shadow-card transition-all hover:translate-y-[-5px] hover:shadow-lg cursor-pointer">
            <div className="flex justify-between">
              <div>
                <p className="text-dark-700 text-sm">Store Incidents</p>
                <p className="text-2xl font-bold">7</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-incident/10 flex items-center justify-center">
                <ShieldAlert className="h-6 w-6 text-incident" />
              </div>
            </div>
            <div className="mt-3 text-dark-700 text-sm">
              -1 since yesterday
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1 lg:col-span-2">
            <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden h-96">
              <div className="p-4 border-b border-dark-300/30">
                <h3 className="text-lg font-semibold">Real-time Map</h3>
              </div>
              <div className="h-[calc(100%-56px)] relative" style={{ minHeight: "400px" }}>
                <LiveIncidentMap />
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden h-96">
              <div className="p-4 border-b border-dark-300/30">
                <h3 className="text-lg font-semibold">Recent Incidents</h3>
              </div>
              <div className="overflow-y-auto h-[calc(100%-56px)]">
                <IncidentPanel />
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden h-72">
              <div className="p-4 border-b border-dark-300/30 flex justify-between items-center">
                <h3 className="text-lg font-semibold">Weather Warnings</h3>
                <Link href="/weather-alerts" className="px-2 py-1 text-xs bg-dark-300/50 text-dark-700 hover:bg-dark-300/80 hover:text-white rounded-full transition-colors">
                  View All
                </Link>
              </div>
              <div className="h-[calc(100%-56px)] overflow-y-auto">
                <WeatherAlertMonitor refreshInterval={600000} />
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden h-72">
              <div className="p-4 border-b border-dark-300/30 flex justify-between items-center">
                <h3 className="text-lg font-semibold">Status</h3>
                <span className="px-2 py-1 text-xs bg-dark-300/50 text-dark-700 rounded-full">
                  System Active
                </span>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-dark-700">API Service</span>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dark-700">Weather Data</span>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dark-700">Incident Tracking</span>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dark-700">Citizen Reports</span>
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                </div>
                <div className="text-xs text-dark-700 pt-3 border-t border-dark-300/30">
                  Last system check: {systemCheckTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="card-gradient rounded-xl border border-dark-300/30 shadow-card overflow-hidden">
            <div className="p-4 border-b border-dark-300/30">
              <h3 className="text-lg font-semibold">Active Hurricanes</h3>
            </div>
            <div className="h-64 md:h-80">
              <HurricaneMap category="Category 5" status="active" />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}