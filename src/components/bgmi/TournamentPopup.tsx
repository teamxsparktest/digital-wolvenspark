
import { X, Trophy } from 'lucide-react';

interface TournamentPopupProps {
  tournament: any;
  onClose: () => void;
}

const TournamentPopup = ({ tournament, onClose }: TournamentPopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div 
        className="relative bg-revenant-purple-dark border border-revenant-purple/20 rounded-2xl p-6 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        
        <div className="flex items-center gap-4 mb-6">
          <Trophy className="text-revenant-yellow" size={32} />
          <div>
            <h3 className="text-2xl font-bold neon-text">{tournament.name}</h3>
            <p className="text-sm text-gray-300">{tournament.dates}</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <div className="glass-card p-4 mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">Tournament Details</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-gray-200">{tournament.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Prize Pool:</span>
                  <span className="text-revenant-yellow">{tournament.prizePool}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Format:</span>
                  <span className="text-gray-200">{tournament.format}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Teams:</span>
                  <span className="text-gray-200">{tournament.teams}</span>
                </div>
              </div>
            </div>
            
            {tournament.placement && (
              <div className="glass-card p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Our Performance</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Placement:</span>
                    <span className={`font-semibold ${
                      tournament.placement === '1st' ? 'text-revenant-yellow' :
                      tournament.placement === '2nd' ? 'text-white' :
                      tournament.placement === '3rd' ? 'text-orange-400' : 'text-gray-200'
                    }`}>{tournament.placement}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Kills:</span>
                    <span className="text-gray-200">{tournament.kills}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Points:</span>
                    <span className="text-revenant-purple-light">{tournament.points}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="md:w-1/2 flex flex-col">
            {tournament.highlights && (
              <div className="glass-card p-4 mb-4 flex-grow">
                <h4 className="text-lg font-semibold text-white mb-2">Highlights</h4>
                <p className="text-gray-300 text-sm">{tournament.highlights}</p>
              </div>
            )}
            
            {tournament.matches && tournament.matches.length > 0 && (
              <div className="glass-card p-4 flex-grow">
                <h4 className="text-lg font-semibold text-white mb-2">Key Matches</h4>
                <div className="space-y-3">
                  {tournament.matches.map((match: any, idx: number) => (
                    <div key={idx} className="p-2 border border-white/10 rounded-lg">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{match.opponent}</span>
                        <span className={`${
                          match.result === 'Win' ? 'text-green-400' :
                          match.result === 'Loss' ? 'text-red-400' : 'text-yellow-400'
                        }`}>{match.result}</span>
                      </div>
                      {match.score && (
                        <div className="text-xs text-gray-400 mt-1">
                          Score: {match.score}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentPopup;
