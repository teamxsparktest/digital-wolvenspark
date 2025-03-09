
import { useState } from 'react';
import PlayerCard from './PlayerCard';
import PlayerPopup from './PlayerPopup';
import TournamentPopup from './TournamentPopup';
import { Trophy } from 'lucide-react';

interface PlayersListProps {
  players: any[];
  tournaments: any[];
}

const PlayersList = ({ players, tournaments }: PlayersListProps) => {
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  const [selectedTournament, setSelectedTournament] = useState<any>(null);
  
  // Calculate team stats
  const totalKills = players.reduce((total, player) => total + (player.stats?.Kills || 0), 0);
  const averageKD = (players.reduce((total, player) => total + (player.stats?.["K/D Ratio"] || 0), 0) / players.length).toFixed(2);
  const bestHeadshot = Math.max(...players.map(player => {
    const hsPercent = player.stats?.["Headshot %"] || "0%";
    return parseFloat(hsPercent.replace("%", ""));
  }));
  const topFragger = players.reduce((best, current) => 
    (best.stats?.Kills || 0) > (current.stats?.Kills || 0) ? best : current, players[0]);

  return (
    <>
      <div className="glass-card p-6 mb-8">
        <h3 className="text-xl font-bold neon-text mb-4">Team Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-400">Combined Kills</p>
            <p className="text-2xl font-bold text-revenant-yellow">{totalKills}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Average K/D</p>
            <p className="text-2xl font-bold text-white">{averageKD}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Best Headshot %</p>
            <p className="text-2xl font-bold text-white">{bestHeadshot}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Top Fragger</p>
            <p className="text-2xl font-bold text-revenant-purple-light">{topFragger.id}</p>
          </div>
        </div>
      </div>

      {/* Recent Tournaments Section */}
      <div className="mb-12">
        <h3 className="text-xl font-bold neon-text mb-6">Recent Tournaments</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tournaments.slice(0, 3).map((tournament, idx) => (
            <div 
              key={idx}
              className="glass-card p-6 hover:border-revenant-purple/30 transition-colors cursor-pointer"
              onClick={() => setSelectedTournament(tournament)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold neon-text">{tournament.name}</h3>
                  <p className="text-gray-400 text-xs">{tournament.dates}</p>
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
                  <span className={`inline-block px-3 py-1 rounded-lg text-xs ${
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
              
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-revenant-yellow">{tournament.prizePool}</div>
                <div className="text-xs text-gray-400 flex items-center">
                  <Trophy className="w-3 h-3 mr-1" />
                  View details
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button 
            className="text-sm text-revenant-purple-light hover:text-white transition-colors"
            onClick={() => setSelectedTournament(tournaments[0])}
          >
            View all tournaments
          </button>
        </div>
      </div>

      {/* Players Section */}
      <h3 className="text-xl font-bold neon-text mb-6">Player Roster</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {players.map((player) => (
          <PlayerCard 
            key={player.id} 
            player={player} 
            onClick={() => setSelectedPlayer(player)} 
          />
        ))}
      </div>
      
      {selectedPlayer && (
        <PlayerPopup 
          player={selectedPlayer} 
          onClose={() => setSelectedPlayer(null)} 
        />
      )}

      {selectedTournament && (
        <TournamentPopup 
          tournament={selectedTournament} 
          onClose={() => setSelectedTournament(null)} 
        />
      )}
    </>
  );
};

export default PlayersList;
