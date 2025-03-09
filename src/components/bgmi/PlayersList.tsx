
import { useState } from 'react';
import PlayerCard from './PlayerCard';
import PlayerPopup from './PlayerPopup';

interface PlayersListProps {
  players: any[];
}

const PlayersList = ({ players }: PlayersListProps) => {
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
