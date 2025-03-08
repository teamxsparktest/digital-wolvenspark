
import { useState } from 'react';
import { useScrollReveal } from '../utils/animationUtils';
import { X, Trophy } from 'lucide-react';

interface BGMIPopupProps {
  onClose: () => void;
}

const BGMIPopup = ({ onClose }: BGMIPopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div 
        className="relative bg-revenant-purple-dark border border-revenant-purple/20 rounded-2xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold neon-text mb-4">Revenant XSpark BGMI</h3>
            <p className="text-gray-300">
              A dominant force in BGMI, led by Sc0utOP's vision and featuring top talents like Sarang, SPRAYGOD, Shadow7, and Jokerr.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-revenant-purple-light mb-4">Player Stats</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Player</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Notable Contribution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Sarang</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Assaulter</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">High clutch rate</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">SPRAYGOD</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Fragger</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Precision and aggression</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Shadow7</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Support</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Team coordination</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Jokerr</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Flex</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Versatile playmaking</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Syed</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">TBD</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Stats pending</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-revenant-purple-light mb-4">Recent Tournament</h4>
            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <div>
                  <h5 className="text-lg font-bold neon-text">ESL Snapdragon Pro Series Season 6: BGMI</h5>
                  <p className="text-gray-400">December 27, 2024 - February 2, 2025</p>
                </div>
                <div className="px-4 py-2 bg-revenant-yellow/10 border border-revenant-yellow/20 rounded-lg">
                  <span className="text-revenant-yellow flex items-center">
                    <Trophy size={16} className="mr-2" /> Prize Pool: ₹1,00,00,000 INR
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                Result: TBD (specific placement not detailed as of now)
              </p>
              
              <div className="bg-revenant-purple/10 border border-revenant-purple/20 p-4 rounded-lg">
                <p className="text-sm text-center">
                  Check back for updates on upcoming BGMI tournaments in 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BGMISection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1);
  
  return (
    <section id="bgmi" className="py-24 bg-gradient-to-b from-revenant-dark to-revenant-darker">
      <div className="section-container">
        <div 
          ref={titleRef} 
          className={`mb-16 text-center transform transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-revenant-purple/10 border border-revenant-purple/20 mb-4">
            <span className="text-sm uppercase tracking-wider text-revenant-purple-light">Battlegrounds Mobile India</span>
          </div>
          <h2 className="heading-lg">BGMI <span className="neon-text">Division</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Dominating the Indian BGMI scene with precision, strategy, and relentless determination.
          </p>
        </div>
        
        <div 
          ref={contentRef}
          className={`transform transition-all duration-700 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card p-8 text-center">
            <h3 className="text-xl font-bold neon-text mb-4">Team Stats & Tournament Info</h3>
            <p className="mb-8 text-gray-300">
              Explore detailed player stats and tournament performance of our BGMI roster.
            </p>
            <button 
              onClick={() => setShowPopup(true)}
              className="px-6 py-3 rounded-lg bg-revenant-purple hover:bg-revenant-purple-dark text-white font-medium transition-all duration-300 neon-glow hover:shadow-[0_0_20px_rgba(175,79,254,0.5),0_0_40px_rgba(175,79,254,0.2)]"
            >
              View BGMI Stats
            </button>
            
            <div className="mt-8 flex justify-center">
              <img 
                src="https://placehold.co/600x400/121212/AF4FFE?text=BGMI+Team&font=montserrat" 
                alt="BGMI Team" 
                className="max-w-full rounded-xl border border-revenant-purple/20"
              />
            </div>
          </div>
        </div>
      </div>
      
      {showPopup && <BGMIPopup onClose={() => setShowPopup(false)} />}
    </section>
  );
};

export default BGMISection;
