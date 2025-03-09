
import { useState } from 'react';
import PlayerCard from './PlayerCard';
import PlayerPopup from './PlayerPopup';

interface PlayersListProps {
  players: any[];
}

const PlayersList = ({ players }: PlayersListProps) => {
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  
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
    </>
  );
};

export default PlayersList;
