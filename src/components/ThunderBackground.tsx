
import { useEffect, useState } from 'react';

const ThunderBackground = () => {
  const [flash, setFlash] = useState(false);
  
  useEffect(() => {
    // Create random thunder flashes
    const createThunderEffect = () => {
      // Random timeout between 5-15 seconds
      const timeout = Math.random() * 10000 + 5000;
      
      setTimeout(() => {
        setFlash(true);
        
        // First flash duration
        setTimeout(() => {
          setFlash(false);
          
          // Delay before second flash
          setTimeout(() => {
            setFlash(true);
            
            // Second flash duration
            setTimeout(() => {
              setFlash(false);
              
              // Continue the effect
              createThunderEffect();
            }, 120);
          }, 80);
        }, 150);
      }, timeout);
    };
    
    createThunderEffect();
    
    return () => {
      // Clean up timeouts if component unmounts
    };
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-thunder-pattern thunder-flash"></div>
      {flash && (
        <div className="absolute inset-0 bg-revenant-purple/5 transition-opacity duration-100"></div>
      )}
    </div>
  );
};

export default ThunderBackground;
