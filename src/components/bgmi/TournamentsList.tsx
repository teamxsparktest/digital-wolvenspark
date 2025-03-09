
import { useState } from 'react';
import { Calendar } from 'lucide-react';
import TournamentPopup from './TournamentPopup';

interface TournamentsListProps {
  tournaments: any[];
}

const TournamentsList = ({ tournaments }: TournamentsListProps) => {
  const [selectedTournament, setSelectedTournament] = useState<any>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tournaments.map((tournament, idx) => (
          <div 
            key={idx}
            className="glass-card p-6 hover:border-revenant-purple/30 transition-colors cursor-pointer"
            onClick={() => setSelectedTournament(tournament)}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold neon-text">{tournament.name}</h3>
                <p className="text-gray-400 text-sm">{tournament.dates}</p>
              </div>
              <div className={`px-3 py-1 rounded-lg text-xs ${
                tournament.status === 'Ongoing' 
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                  : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
              }`}>
                {tournament.status}
              </div>
            </div>
            
            {tournament.placement && (
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-lg text-sm ${
                  tournament.placement === '1st' 
                    ? 'bg-revenant-yellow/10 text-revenant-yellow' 
                    : tournament.placement === '2nd'
                      ? 'bg-white/10 text-white'
                      : tournament.placement === '3rd'
                        ? 'bg-orange-500/10 text-orange-400'
                        : 'bg-white/5 text-gray-300'
                }`}>
                  {tournament.placement} Place
                </span>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400">Prize Pool</p>
                <p className="text-sm font-semibold text-revenant-yellow">{tournament.prizePool}</p>
              </div>
              {tournament.kills && (
                <div>
                  <p className="text-xs text-gray-400">Total Kills</p>
                  <p className="text-sm font-semibold">{tournament.kills}</p>
                </div>
              )}
              {tournament.points && (
                <div>
                  <p className="text-xs text-gray-400">Total Points</p>
                  <p className="text-sm font-semibold text-revenant-purple-light">{tournament.points}</p>
                </div>
              )}
            </div>
            
            <div className="mt-4 text-center">
              <span className="text-xs inline-flex items-center text-gray-400">
                <Calendar className="w-3 h-3 mr-1" />
                Click for details
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {selectedTournament && (
        <TournamentPopup 
          tournament={selectedTournament} 
          onClose={() => setSelectedTournament(null)} 
        />
      )}
    </>
  );
};

export default TournamentsList;
