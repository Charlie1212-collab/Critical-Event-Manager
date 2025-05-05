import React, { useState, useEffect } from 'react'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'
import DashboardContent from '../components/DashboardContent'

function Home() {
  const [backgroundImageError, setBackgroundImageError] = useState(false);

  // Check if background image is available
  useEffect(() => {
    const backgroundImage = new Image();
    backgroundImage.src = '/assets/background.jpg';
    backgroundImage.onerror = () => {
      console.error("Background image failed to load");
      setBackgroundImageError(true);
    };
  }, []);

  return (
    <div className={`h-screen flex flex-col ${backgroundImageError ? 'bg-dark' : 'bg-dark bg-opacity-90'}`}
      style={!backgroundImageError ? {
        backgroundImage: "url('/assets/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      } : {}}>
      <Header />
      <div className="flex-grow overflow-y-auto">
        <DashboardContent />
      </div>
      <Footer />
    </div>
  )
}

export default Home
