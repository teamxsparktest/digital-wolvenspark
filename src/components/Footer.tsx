
import { Instagram, Twitter, Youtube, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-revenant-darker border-t border-white/5">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center mb-4">
              <span className="text-xl font-bold tracking-wider neon-text">REVENANT</span>
              <span className="ml-1 text-xl font-bold tracking-wider yellow-neon-text">XSPARK</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Dominating the Indian esports scene with precision, strategy, and relentless determination.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-revenant-purple/20 transition-all duration-300">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-revenant-purple/20 transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-revenant-purple/20 transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-revenant-purple/20 transition-all duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white hover:neon-text transition-all duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white hover:neon-text transition-all duration-300">About</a></li>
              <li><a href="#career" className="text-gray-400 hover:text-white hover:neon-text transition-all duration-300">Career</a></li>
              <li><a href="#players" className="text-gray-400 hover:text-white hover:neon-text transition-all duration-300">Players</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Location: <span className="text-gray-300">India</span></li>
              <li className="text-gray-400">Email: <a href="mailto:info@revenantxspark.com" className="text-gray-300 hover:text-white transition-all duration-300">info@revenantxspark.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 mt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Revenant XSpark. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-all duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-all duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
