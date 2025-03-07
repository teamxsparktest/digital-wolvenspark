
import { useEffect, useState, useRef } from 'react';

const ThunderBackground = () => {
  const [flash, setFlash] = useState(false);
  const [intensity, setIntensity] = useState(0);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  
  useEffect(() => {
    // Clear all timeouts on unmount
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);
  
  useEffect(() => {
    // Create realistic thunder effect with multiple flash patterns
    const createThunderEffect = () => {
      // Random timeout between 5-20 seconds for natural timing
      const nextThunderDelay = Math.random() * 15000 + 5000;
      
      const triggerThunder = () => {
        // Determine thunder type (different flash patterns)
        const thunderType = Math.floor(Math.random() * 3);
        
        switch (thunderType) {
          case 0: // Single bright flash
            setIntensity(0.12);
            setFlash(true);
            
            const timeout1 = setTimeout(() => {
              setFlash(false);
              setIntensity(0);
              scheduleNextThunder();
            }, 120);
            timeoutsRef.current.push(timeout1);
            break;
            
          case 1: // Double flash (common pattern)
            setIntensity(0.08);
            setFlash(true);
            
            const timeout2a = setTimeout(() => {
              setFlash(false);
              
              const timeout2b = setTimeout(() => {
                setIntensity(0.15);
                setFlash(true);
                
                const timeout2c = setTimeout(() => {
                  setFlash(false);
                  setIntensity(0);
                  scheduleNextThunder();
                }, 150);
                timeoutsRef.current.push(timeout2c);
              }, 70);
              timeoutsRef.current.push(timeout2b);
            }, 100);
            timeoutsRef.current.push(timeout2a);
            break;
            
          case 2: // Triple flash with increasing intensity
            setIntensity(0.05);
            setFlash(true);
            
            const timeout3a = setTimeout(() => {
              setFlash(false);
              
              const timeout3b = setTimeout(() => {
                setIntensity(0.1);
                setFlash(true);
                
                const timeout3c = setTimeout(() => {
                  setFlash(false);
                  
                  const timeout3d = setTimeout(() => {
                    setIntensity(0.18);
                    setFlash(true);
                    
                    const timeout3e = setTimeout(() => {
                      setFlash(false);
                      setIntensity(0);
                      scheduleNextThunder();
                    }, 180);
                    timeoutsRef.current.push(timeout3e);
                  }, 60);
                  timeoutsRef.current.push(timeout3d);
                }, 90);
                timeoutsRef.current.push(timeout3c);
              }, 60);
              timeoutsRef.current.push(timeout3b);
            }, 80);
            timeoutsRef.current.push(timeout3a);
            break;
        }
      };
      
      const scheduleNextThunder = () => {
        const nextTimeout = setTimeout(triggerThunder, nextThunderDelay);
        timeoutsRef.current.push(nextTimeout);
      };
      
      // Start the first thunder
      triggerThunder();
    };
    
    // Start the thunder effect
    createThunderEffect();
    
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Thunder pattern background */}
      <div className="absolute inset-0 bg-thunder-pattern opacity-40"></div>
      
      {/* Dynamic thunder flash */}
      {flash && (
        <div 
          className="absolute inset-0 bg-revenant-purple-neon transition-opacity duration-100"
          style={{ 
            opacity: intensity,
            boxShadow: `inset 0 0 ${Math.floor(intensity * 150)}px ${Math.floor(intensity * 100)}px rgba(175, 79, 254, ${intensity * 0.8})` 
          }}
        />
      )}
    </div>
  );
};

export default ThunderBackground;
