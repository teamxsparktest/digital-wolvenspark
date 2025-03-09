
interface PlayerCardProps {
  player: any;
  onClick: () => void;
}

const PlayerCard = ({ player, onClick }: PlayerCardProps) => {
  return (
    <div 
      className="glass-card hover:bg-white/10 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={player.image} 
          alt={player.id} 
          className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold neon-text">{player.id}</h3>
        <p className="text-sm text-gray-300">{player.name !== "-" ? player.name : "Name not provided"}</p>
        <p className="text-xs text-revenant-purple-light mt-1">{player.role || "Role TBD"}</p>
        
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs text-gray-400">Kills</p>
            <p className="text-sm font-semibold">{player.stats?.Kills || "-"}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">K/D</p>
            <p className="text-sm font-semibold">{player.stats?.["K/D Ratio"] || "-"}</p>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs text-gray-400">Headshot %</p>
            <p className="text-sm font-semibold">{player.stats?.["Headshot %"] || "-"}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Revivals</p>
            <p className="text-sm font-semibold">{player.stats?.Revival || "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
