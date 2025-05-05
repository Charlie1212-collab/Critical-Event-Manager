import React from 'react'
import { LucideIcon, Search } from 'lucide-react'

function Header() {
  return (
    <header className="bg-dark-card p-4 flex items-center justify-between border-b border-dark-border">
      <div className="flex items-center">
        <span className="text-dark-text-white text-xl font-semibold">Critical Event Manager</span>
      </div>

      <nav className="flex items-center space-x-4">
        <a href="#" className="hover:text-dark-text-white">Ovex eview</a>
        <a href="#" className="hover:text-dark-text-white">Incidents</a>
        <a href="#" className="hover:text-dark-text-white">Weather Alerts</a>
        <a href="#" className="hover:text-dark-text-white">Store Status</a>
        <a href="/walgreens-videos" className="hover:text-dark-text-white">Walgreens Videos</a>
        <a href="#" className="hover:text-dark-text-white">Reports</a>
        <a href="#" className="hover:text-dark-text-white">Serpors</a>
        <a href="#" className="hover:text-dark-text-white">Settings</a>
      </nav>

      <div className="flex items-center space-x-4">
        <Search className="text-dark-text-gray hover:text-dark-text-white cursor-pointer" size={20} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {/* Add your button content here */}
        </button>
      </div>
    </header>
  )
}

export default Header
