
import { useRef, useEffect } from 'react';
import { useParallax, useScrollReveal } from '../utils/animationUtils';

const AboutSection = () => {
  const bgParallax = useParallax(0.2);
  const contentParallax = useParallax(-0.1);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: textRef, isVisible: textVisible } = useScrollReveal(0.2);
  
  // Generate floating elements
  const floatingElements = [];
  for (let i = 0; i < 10; i++) {
    const size = Math.random() * 3 + 1;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 5 + 5;
    
    floatingElements.push(
      <div 
        key={i}
        className="absolute rounded-full bg-revenant-purple/20"
        style={{
          width: `${size}rem`,
          height: `${size}rem`,
          left: `${left}%`,
          top: `${top}%`,
          animation: `float ${duration}s ease-in-out ${delay}s infinite`,
        }}
      />
    );
  }
  
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-revenant-darker to-revenant-dark">
        <div ref={bgParallax} className="parallax-layer">
          {floatingElements}
        </div>
      </div>
      
      <div className="section-container relative z-10">
        <div ref={contentParallax} className="flex flex-col items-center">
          <div 
            ref={titleRef} 
            className={`mb-12 text-center transform transition-all duration-700 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-revenant-purple/10 border border-revenant-purple/20 mb-4">
              <span className="text-sm uppercase tracking-wider text-revenant-purple-light">About Us</span>
            </div>
            <h2 className="heading-lg">The <span className="neon-text">Powerhouse</span> of Indian BGMI</h2>
          </div>
          
          <div 
            ref={textRef}
            className={`max-w-3xl mx-auto text-center glass-card p-8 md:p-12 transform transition-all duration-700 delay-300 ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="paragraph mb-6">
              Revenant XSpark was formed through a historic collaboration between Team XSpark and Revenant Esports, creating one of the most formidable forces in the Indian esports landscape.
            </p>
            
            <p className="paragraph mb-6">
              Under the leadership of Sc0utOP (Tanmay Singh), the team has established itself as a dominant force in the competitive BGMI scene, with remarkable triumphs in prestigious tournaments like BGIS 2024 and BMPS 2024.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-3xl font-bold mb-2 yellow-neon-text">2019</span>
                <span className="text-sm text-gray-300">Est. September 10</span>
              </div>
              
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-3xl font-bold mb-2 yellow-neon-text">$236,467</span>
                <span className="text-sm text-gray-300">Total Winnings</span>
              </div>
              
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-3xl font-bold mb-2 yellow-neon-text">India</span>
                <span className="text-sm text-gray-300">Team Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
