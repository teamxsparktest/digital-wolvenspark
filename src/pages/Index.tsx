
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CareerSection from '../components/CareerSection';
import PlayersSection from '../components/PlayersSection';
import ValorantSection from '../components/ValorantSection';
import OwnerDetailsSection from '../components/OwnerDetailsSection';
import GallerySection from '../components/GallerySection';
import StatisticsSection from '../components/StatisticsSection';
import TournamentSection from '../components/TournamentSection';
import OGSupportersSection from '../components/OGSupportersSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-revenant-darker flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-4 border-t-revenant-purple border-r-revenant-purple border-b-transparent border-l-transparent animate-spin mb-8"></div>
          <div className="flex items-center animate-pulse">
            <span className="text-2xl font-bold tracking-wider neon-text">REVENANT</span>
            <span className="ml-1 text-2xl font-bold tracking-wider yellow-neon-text">XSPARK</span>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Fixed header */}
      <Header />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <CareerSection />
        <PlayersSection />
        <ValorantSection />
        <OwnerDetailsSection />
        <GallerySection />
        <StatisticsSection />
        <TournamentSection />
        <OGSupportersSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
