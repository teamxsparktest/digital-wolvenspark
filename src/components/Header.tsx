
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Career', href: '#career' },
    { name: 'Players', href: '#players' },
    { name: 'Valorant', href: '#valorant' },
    { name: 'Owner', href: '#owner' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Statistics', href: '#statistics' },
    { name: 'Tournaments', href: '#tournaments' },
    { name: 'Supporters', href: '#supporters' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-revenant-darker/80 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <span className="text-xl font-bold tracking-wider neon-text">REVENANT</span>
              <span className="ml-1 text-xl font-bold tracking-wider yellow-neon-text">XSPARK</span>
            </a>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-gray-300 hover:text-white hover:neon-text transition-all duration-300 text-sm uppercase tracking-wider ${
                  link.name === 'Valorant' ? 'text-revenant-purple-light font-semibold' : ''
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-gray-300 hover:text-white"
              aria-label="Open mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 z-50 bg-revenant-darker/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white"
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-gray-300 hover:text-white hover:neon-text transition-all duration-300 text-2xl uppercase tracking-wider ${
                link.name === 'Valorant' ? 'text-revenant-purple-light font-semibold' : ''
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
