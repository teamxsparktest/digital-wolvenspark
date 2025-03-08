
import { useEffect, useState, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { useParallax } from '../utils/animationUtils';

const HeroSection = () => {
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const logoRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundParallax = useParallax(0.15);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotateY((prev) => prev + 0.5);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      const deltaX = (mouseX - centerX) / (width / 2) * 10;
      const deltaY = (mouseY - centerY) / (height / 2) * 10;
      
      if (logoRef.current) {
        logoRef.current.style.transform = `
          perspective(1000px) 
          rotateY(${rotateY + deltaX}deg) 
          rotateX(${-deltaY}deg)
          scale3d(${scale}, ${scale}, ${scale})
        `;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rotateY, scale]);
  
  return (
    <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <div ref={backgroundParallax} className="absolute inset-0 bg-thunder-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-revenant-purple/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div ref={containerRef} className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-revenant-purple/10 border border-revenant-purple/20 mb-4">
              <span className="text-sm uppercase tracking-wider text-purple-300">Indian Esport Organization</span>
            </div>
            <h1 className="font-orbitron heading-xl mb-4">
              <span className="block text-white">Revenant</span>
              <span className="block text-revenant-purple-neon drop-shadow-[0_0_8px_rgba(175,79,254,0.7)]">XSpark</span>
            </h1>
            <p className="paragraph mb-8 max-w-xl">
              Dominating the Indian esports scene with precision, strategy, and relentless determination.
            </p>
            <p className="text-2xl font-bold mb-8 text-revenant-purple-neon drop-shadow-[0_0_8px_rgba(175,79,254,0.7)]">#wolvenspark</p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#about" 
                className="px-6 py-3 rounded-lg bg-revenant-purple hover:bg-revenant-purple-dark text-white font-medium transition-all duration-500 shadow-[0_0_15px_rgba(175,79,254,0.3),0_0_30px_rgba(175,79,254,0.1)] hover:shadow-[0_0_20px_rgba(175,79,254,0.5),0_0_40px_rgba(175,79,254,0.2)]"
              >
                Discover More
              </a>
              <a 
                href="#career" 
                className="px-6 py-3 rounded-lg bg-transparent border border-revenant-purple/30 text-white font-medium hover:border-revenant-purple/70 transition-all duration-500"
              >
                Our Achievements
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
            <div 
              ref={logoRef} 
              className="relative w-full h-full max-w-[500px] max-h-[500px] transform-gpu"
              style={{
                transformStyle: 'preserve-3d',
                transform: `perspective(1000px) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-revenant-purple/10 blur-3xl animate-pulse-neon"></div>
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-full animate-rotate-slow">
                  <div className="w-full h-full rounded-full border-2 border-dotted border-revenant-purple/30 animate-rotate-slow"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] rounded-full bg-revenant-purple/5 border border-revenant-purple/20 animate-float flex items-center justify-center">
                    <div className="text-8xl md:text-9xl font-bold font-orbitron text-white shadow-[0_0_15px_rgba(175,79,254,0.3),0_0_30px_rgba(175,79,254,0.1)] tracking-widest">
                      RNTX
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-small">
          <a href="#about" className="flex flex-col items-center text-purple-300 hover:text-white transition-colors duration-500">
            <span className="text-sm uppercase tracking-wider mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
