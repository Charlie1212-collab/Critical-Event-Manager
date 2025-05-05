import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Search, Bell } from "lucide-react";

interface HeaderProps {
    showMobileMenu?: boolean;
    setShowMobileMenu?: (show: boolean) => void;
}

function Header({ showMobileMenu, setShowMobileMenu }: HeaderProps) {
    const router = useRouter();
    const [activeRoute, setActiveRoute] = useState("/");

    useEffect(() => {
        // Update active route when router is ready
        setActiveRoute(router.pathname);
    }, [router.pathname]);

    // Helper function to determine if a link is active
    const isActive = (path: string): boolean => {
        return activeRoute === path;
    };

    return (
        <header className="bg-dark-card border-b border-dark-border">
            {/* Top section with title and buttons */}
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <span className="text-dark-text-white text-xl font-semibold">Critical Event Manager</span>
                </div>

                <div className="flex items-center space-x-4">
                    <Search className="text-dark-text-gray hover:text-dark-text-white cursor-pointer" size={20} />
                    <Bell className="text-dark-text-gray hover:text-dark-text-white cursor-pointer" size={20} />
                    <button className="bg-blue-500 hover:bg-blue-700 text-dark-text-white font-bold py-2 px-4 rounded">
                        Alert
                    </button>
                </div>
            </div>

            {/* Main navigation as full-width menu - enhanced with active states */}
            <nav className="flex items-center justify-center bg-dark-300/30 py-3 px-4 w-full overflow-x-auto">
                <div className="container flex items-center justify-between max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className={`px-4 py-2 hover:text-blue-400 hover:bg-dark-300/50 rounded-md transition-colors ${isActive("/") ? "bg-dark-300/50 text-blue-400 font-medium" : "text-dark-text-white"
                            }`}
                    >
                        Dashboard
                    </Link>

                    <Link
                        href="/incidents"
                        className={`px-4 py-2 hover:text-blue-400 hover:bg-dark-300/50 rounded-md transition-colors ${isActive("/incidents") ? "bg-dark-300/50 text-blue-400 font-medium" : "text-dark-text-white"
                            }`}
                    >
                        Incidents
                    </Link>

                    <Link
                        href="/national-news"
                        className={`px-4 py-2 hover:text-blue-400 hover:bg-dark-300/50 rounded-md transition-colors ${isActive("/national-news") ? "bg-dark-300/50 text-blue-400 font-medium" : "text-dark-text-white"
                            }`}
                    >
                        National News
                    </Link>

                    <Link
                        href="/weather-alerts"
                        className={`px-4 py-2 hover:text-blue-400 hover:bg-dark-300/50 rounded-md transition-colors ${isActive("/weather-alerts") ? "bg-dark-300/50 text-blue-400 font-medium" : "text-dark-text-white"
                            }`}
                    >
                        Weather Alerts
                    </Link>

                    <Link
                        href="/walgreens-news"
                        className={`px-4 py-2 hover:text-blue-400 hover:bg-dark-300/50 rounded-md transition-colors ${isActive("/walgreens-news") ? "bg-dark-300/50 text-blue-400 font-medium" : "text-dark-text-white"
                            }`}
                    >
                        Walgreens News
                    </Link>

                    <Link
                        href="/walgreens-videos"
                        className={`px-4 py-2 hover:text-blue-400 hover:bg-dark-300/50 rounded-md transition-colors ${isActive("/walgreens-videos") ? "bg-dark-300/50 text-blue-400 font-medium" : "text-dark-text-white"
                            }`}
                    >
                        Walgreens Videos
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;