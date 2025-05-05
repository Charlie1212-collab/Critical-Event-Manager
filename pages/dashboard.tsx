import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import MainLayout from "../components/MainLayout";

// Import the new IntegratedDashboardContent instead of the old dashboard
const IntegratedDashboardContent = dynamic(() => import("../components/IntegratedDashboardContent"), { ssr: false });

export default function Dashboard() {
    const [incidents, setIncidents] = useState(12);
    const [weatherAlerts, setWeatherAlerts] = useState(3);
    const [storeIncidents, setStoreIncidents] = useState(7);
    const [citizenIncidentCount, setCitizenIncidentCount] = useState(0);
    const [lastUpdated, setLastUpdated] = useState("");
    const [loading, setLoading] = useState(false);

    // Fetch citizen incidents data with automatic refresh
    const fetchCitizenIncidents = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/citizen-incidents');

            if (!response.ok) {
                throw new Error('Failed to fetch citizen incidents');
            }

            const data = await response.json();
            setCitizenIncidentCount(data.length);
            setLastUpdated(new Date().toLocaleTimeString());

            // Update total incidents count as well
            setIncidents(prev => Math.max(prev, 12 + Math.floor(data.length / 2)));

        } catch (error) {
            console.error("Error fetching citizen incidents:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    // Initial data fetch on component mount
    useEffect(() => {
        fetchCitizenIncidents();

        // Set up automatic refresh every 60 seconds
        const intervalId = setInterval(() => {
            fetchCitizenIncidents();
        }, 60000);

        // Clean up on component unmount
        return () => clearInterval(intervalId);
    }, [fetchCitizenIncidents]);

    return (
        <MainLayout>
            <Head>
                <title>Critical Event Management - Dashboard</title>
                <meta name="description" content="Walgreens Critical Event Management Dashboard" />
            </Head>

            {/* Dashboard content - Now using the new IntegratedDashboardContent */}
            <div className="flex flex-1 overflow-hidden pt-6">
                <IntegratedDashboardContent
                    incidents={incidents}
                    weatherAlerts={weatherAlerts}
                    storeIncidents={storeIncidents}
                    citizenIncidentCount={citizenIncidentCount}
                    lastUpdated={lastUpdated}
                    isLoading={loading}
                />
            </div>
        </MainLayout>
    );
}
