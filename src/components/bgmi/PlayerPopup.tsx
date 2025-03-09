
import { X, Instagram, Youtube } from 'lucide-react';

interface PlayerPopupProps {
  player: any;
  onClose: () => void;
}

const PlayerPopup = ({ player, onClose }: PlayerPopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div 
        className="relative bg-revenant-purple-dark border border-revenant-purple/20 rounded-2xl p-6 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <div className="w-32 h-32 overflow-hidden rounded-full border-2 border-revenant-purple/30">
            <img 
              src={player.image} 
              alt={player.id} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-2xl font-bold neon-text">{player.id}</h3>
            <p className="text-lg text-white">{player.name !== "-" ? player.name : "Name not provided"}</p>
            <p className="text-sm text-revenant-purple-light mt-2">Role: {player.role || "Flex"}</p>
            
            {player.birthDate && (
              <p className="text-sm text-gray-300 mt-2">
                Born: {player.birthDate}
                {player.age && <span> (Age {player.age})</span>}
              </p>
            )}
            
            <p className="text-sm text-gray-300 mt-1">
              Nationality: {player.nationality || "Indian"}
            </p>
            
            <p className="text-sm text-gray-300 mt-1">
              Joined: {player.joinDate}
            </p>
            
            {player.stats && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm font-medium text-revenant-purple-light">Performance Stats:</p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {Object.entries(player.stats).map(([key, value]: [string, any]) => (
                    <div key={key} className="text-sm">
                      <span className="text-gray-400">{key}: </span>
                      <span className="text-gray-200">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {player.notableMedia && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm font-medium text-revenant-purple-light">Notable Media:</p>
                <ul className="text-sm text-gray-300 list-disc pl-5 mt-2">
                  {player.notableMedia.map((media: string, idx: number) => (
                    <li key={idx}>{media}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {(player.instagram || player.youtube) && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm font-medium text-revenant-purple-light mb-3">Social Media:</p>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                  {player.instagram && (
                    <a 
                      href={player.instagram.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm transition-transform hover:scale-105"
                    >
                      <Instagram size={18} />
                      <span>{player.instagram.handle}</span>
                    </a>
                  )}
                  
                  {player.youtube && (
                    <a 
                      href={player.youtube.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white text-sm transition-transform hover:scale-105"
                    >
                      <Youtube size={18} />
                      <span>{player.youtube.handle}</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPopup;
