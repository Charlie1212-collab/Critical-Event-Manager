import React from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

function Header() {
    return (
        <header className="bg-dark-card p-4 flex items-center justify-between border-b border-dark-border">
            <div className="flex items-center">
                <span className="text-dark-text-white text-xl font-semibold">Critical Event Manager</span>
            </div>

            <nav className="flex items-center space-x-4">
                <Link href="/ai-site" className="hover:text-dark-text-white">Overview</Link>
                <Link href="/ai-site/incidents" className="hover:text-dark-text-white">Incidents</Link>
                <Link href="/ai-site/product" className="hover:text-dark-text-white">Product</Link>
                <Link href="/" className="hover:text-dark-text-white">Main Dashboard</Link>
            </nav>

            <div className="flex items-center space-x-4">
                <Search className="text-dark-text-gray hover:text-dark-text-white cursor-pointer" size={20} />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {/* Add your button content here */}
                </button>
            </div>
        </header>
    );
}

export default Header;